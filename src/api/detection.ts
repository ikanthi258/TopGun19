/**
 * API functions สำหรับดึงข้อมูลการตรวจจับ
 */

import axiosInstance from "./axios";
import {
  type CameraResponse,
  type ClearDataResponse,
  type DetectedObject,
  type DetectionResponse,
  type ObjectDetectionResponse,
  type RegenerateTokenResponse,
} from "../types/detection";

export const getCameraById = async (
  camId: string,
  cameraToken: string
): Promise<CameraResponse> => {
  const response = await axiosInstance.get<CameraResponse>(`/object-detection/info/${camId}`, {
    headers: {
      "x-camera-token": cameraToken,
    },
  });
  return response.data;
};

// ดึงข้อมูลการตรวจจับล่าสุดจากกล้อง
// URL: GET /object-detection/{camId}
export const getRecentDetections = async (
  camId: string,
  token: string
): Promise<DetectionResponse> => {
  const response = await axiosInstance.get<DetectionResponse>(
    `/object-detection/${camId}`,
    {
      headers: {
        "x-camera-token": token, // Authentication token
      },
    }
  );

  return response.data;
};

export const sendObjectDetection = async (
  camId: string,
  cameraToken: string,
  image: File,
  objects: DetectedObject[],
  timestamp: string
): Promise<ObjectDetectionResponse> => {
  const formData = new FormData();
  formData.append("image", image);
  formData.append("objects", JSON.stringify(objects));
  formData.append("timestamp", timestamp);

  const response = await axiosInstance.post<ObjectDetectionResponse>(
    `/object-detection/${camId}`,
    formData,
    {
      headers: {
        "x-camera-token": cameraToken,
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
};

export const clearCameraData = async (
  camId: string,
  cameraToken: string
): Promise<ClearDataResponse> => {
  const response = await axiosInstance.delete<ClearDataResponse>(
    `/object-detection/clear/${camId}`,
    {
      headers: {
        "x-camera-token": cameraToken,
      },
    }
  );
  return response.data;
};

export const regenerateToken = async (
  camId: string,
  cameraToken: string
): Promise<RegenerateTokenResponse> => {
  const response = await axiosInstance.patch<RegenerateTokenResponse>(
    `/object-detection/token/${camId}`,
    {
      headers: {
        "x-camera-token": cameraToken,
      },
      token: cameraToken,
    }
  );
  return response.data;
};

export const getUploadedFile = async (
  camId: string,
  cameraToken: string,
  filename: string
): Promise<Blob> => {
  const response = await axiosInstance.get(`/files/${camId}/${filename}`, {
    headers: {
      "x-camera-token": cameraToken,
    },
    responseType: "blob", // สำคัญ: ระบุให้ response เป็น blob
  });
  return response.data;
};

export const createImageUrl = (blob: Blob): string => {
  return URL.createObjectURL(blob);
};

export const downloadFile = (blob: Blob, filename: string): void => {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
