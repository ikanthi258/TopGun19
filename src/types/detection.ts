/**
 * Types สำหรับข้อมูลการตรวจจับวัตถุ
 */

// ข้อมูลกล้อง
export interface Camera {
  id: string;          // UUID ของกล้อง
  name: string;        // ชื่อกล้อง เช่น "Team Alpha"
  location: string;    // ตำแหน่งกล้อง "defence" หรือ "offence"
}

// Response จาก API
export interface DetectionResponse {
  success: boolean;              // สถานะความสำเร็จ
  data: DetectionEvent[];        // รายการ detection events
}

export interface ClearDataResponse {
  success: boolean;
  message: string;
}

export interface RegenerateTokenResponse {
  success: boolean;
  token: string;
  message: string;
}

export interface Camera {
  id: string;
  name: string;
  location: string;
  token: string;
  createdAt: string;
  updatedAt: string;
}

export interface CameraResponse {
  success: boolean;
  data: Camera;
}

export interface ImageInfo {
  filename: string;
  originalname: string;
  mimetype: string;
  size: number;
}

export interface DetectedObject {
  class: string;
  confidence: number;
  bbox: number[];
  [key: string]: any;
}

export interface DetectionEventsResponse {
  success: boolean;
  data: DetectionEvent[];
}

export interface ObjectDetectionResponse {
  success: boolean;
  message: string;
  data: {
    cam_id: string;
    timestamp: string;
    image: ImageInfo;
  };
}

// วัตถุที่ตรวจพบแต่ละชิ้น
export interface DetectedObject {
  obj_id: string;      // รหัสประจำตัววัตถุ เช่น "obj_001"
  type: string;        // ประเภทวัตถุ เช่น "drone", "person", "car"
  lat: number;         // พิกัด Latitude
  lng: number;         // พิกัด Longitude
  objective: string;   // วัตถุประสงค์ เช่น "unknown", "our", "enemy"
  size: string;        // ขนาดวัตถุ เช่น "small", "medium", "large"
}

// เหตุการณ์การตรวจจับ
export interface DetectionEvent {
  id: number;                    // ID ของ event
  cam_id: string;                // UUID ของกล้อง
  camera: Camera;                // ข้อมูลกล้อง
  timestamp: string;             // เวลาที่ตรวจจับ (ISO 8601)
  image_path: string;            // path รูปภาพ เช่น "/uploads/images/..."
  objects: DetectedObject[];     // รายการวัตถุที่ตรวจจับได้
}
