# IMPORT LIBRARIES
import mediapipe
import cv2 as OpenCV

# CREATE HAND OBJECTS
HandsDetection = mediapipe.solutions.hands         # HANDS DETECTION
HandsDetector = HandsDetection.Hands()             # DETECT HANDS FROM IMAGE
DrawingStyles = mediapipe.solutions.drawing_styles # DRAWING STYLES
DrawingUtils = mediapipe.solutions.drawing_utils   # DRAWING UTILS

# CREATE CAMERA OBJECT
Camera = OpenCV.VideoCapture(0)


while Camera.isOpened():
    Exist,Frame = Camera.read()                             # READ FRAMES FROM CAMERA
    Frame = OpenCV.flip(Frame, 1)                           # FLIP IMAGE OBJECT                        
    Height, Width, _ = Frame.shape                          # SCREEN SIZE
    Frame = OpenCV.cvtColor(Frame, OpenCV.COLOR_BGR2RGB)    # FLIP IMAGE

    # CONVERT IMAGE TO BACK TO RGB
    Frame = OpenCV.cvtColor(Frame, OpenCV.COLOR_BGR2RGB)    # OPENCV USE BGR
    DetectedLandmarks = HandsDetector.process(Frame)        # DETECT HANDS FROM IMAGE
    MultiHandLandMarks = DetectedLandmarks.multi_hand_landmarks
    if MultiHandLandMarks:
        for HandLandMark in MultiHandLandMarks:
            # DRAW HAND LANDMARKS
            DrawingUtils.draw_landmarks(Frame, HandLandMark, HandsDetection.HAND_CONNECTIONS,)
    # DISPLAY CAMERA WINDOW USING OPENCV
    OpenCV.imshow("Camera", Frame)
    # HOTKEY TO TURN OFF CAMERA
    if OpenCV.waitKey(1) & 0xFF == ord("q"):
        break

Camera.release()                                            # STOP CAMERA
OpenCV.destroyAllWindows()                                  # CLOSE THE WINDOW
