import { useState, useEffect } from 'react';

const CustomIcons = ({ icon, size, viewBox, unit, fill }) => {
  const [defaultValue, setDefaultValue] = useState({
    customSize: {
      width: '16px',
      height: '16px',
    },
    customViewBox: {
      minX: 0,
      minY: 0,
      width: 100,
      height: 100,
    },
    customUnit: 'px',
    customFill: '#000',
  });

  const getDefaultValues = (icon) => {
    switch (icon) {
      case 'paper-clip':
        return {
          customSize: {
            width: size ? `${size}${unit || 'px'}` : '16px',
            height: size ? `${size}${unit || 'px'}` : '16px',
          },
          customViewBox: {
            minX: viewBox?.minX || 0,
            minY: viewBox?.minY || 0,
            width: viewBox?.width || 100,
            height: viewBox?.height || 100,
          },
          customUnit: unit || 'px',
          customFill: fill || '#000',
        };
      case 'info':
        return {
          customSize: {
            width: size ? `${size}${unit || 'px'}` : '16px',
            height: size ? `${size}${unit || 'px'}` : '16px',
          },
          customViewBox: {
            minX: viewBox?.minX || 0,
            minY: viewBox?.minY || 0,
            width: viewBox?.width || 100,
            height: viewBox?.height || 100,
          },
          customUnit: unit || 'px',
          customFill: fill || '#000',
        };
      case 'user':
        return {
          customSize: {
            width: size ? `${size}${unit || 'px'}` : '16px',
            height: size ? `${size}${unit || 'px'}` : '16px',
          },
          customViewBox: {
            minX: viewBox?.minX || 0,
            minY: viewBox?.minY || 0,
            width: viewBox?.width || 100,
            height: viewBox?.height || 100,
          },
          customUnit: unit || 'px',
          customFill: fill || '#000',
        };
      case 'send-email':
        return {
          customSize: {
            width: size ? `${size}${unit || 'px'}` : '16px',
            height: size ? `${size}${unit || 'px'}` : '16px',
          },
          customViewBox: {
            minX: viewBox?.minX || 0,
            minY: viewBox?.minY || 0,
            width: viewBox?.width || 100,
            height: viewBox?.height || 100,
          },
          customUnit: unit || 'px',
          customFill: fill || '#000',
        };
      case 'cart':
        return {
          customSize: {
            width: size ? `${size}${unit || 'px'}` : '16px',
            height: size ? `${size}${unit || 'px'}` : '16px',
          },
          customViewBox: {
            minX: viewBox?.minX || 0,
            minY: viewBox?.minY || 0,
            width: viewBox?.width || 100,
            height: viewBox?.height || 100,
          },
          customUnit: unit || 'px',
          customFill: fill || '#000',
        };
      case 'arrows-expand':
        return {
          customSize: {
            width: size ? `${size}${unit || 'px'}` : '16px',
            height: size ? `${size}${unit || 'px'}` : '16px',
          },
          customViewBox: {
            minX: viewBox?.minX || 0,
            minY: viewBox?.minY || 0,
            width: viewBox?.width || 16,
            height: viewBox?.height || 16,
          },
          customUnit: unit || 'px',
          customFill: fill || '#000',
        };
      case 'qr-code-scan':
        return {
          customSize: {
            width: size ? `${size}${unit || 'px'}` : '16px',
            height: size ? `${size}${unit || 'px'}` : '16px',
          },
          customViewBox: {
            minX: viewBox?.minX || 0,
            minY: viewBox?.minY || 0,
            width: viewBox?.width || 16,
            height: viewBox?.height || 16,
          },
          customUnit: unit || 'px',
          customFill: fill || '#000',
        };
      case 'repair':
        return {
          customSize: {
            width: size ? `${size}${unit || 'px'}` : '100px',
            height: size ? `${size}${unit || 'px'}` : '100px',
          },
          customViewBox: {
            minX: viewBox?.minX || 0,
            minY: viewBox?.minY || 0,
            width: viewBox?.width || 100,
            height: viewBox?.height || 100,
          },
          customUnit: unit || 'px',
          customFill: fill || '#000',
        };
      case 'g':
        return {
          customSize: {
            width: size ? `${size}${unit || 'px'}` : '16px',
            height: size ? `${size}${unit || 'px'}` : '16px',
          },
          customViewBox: {
            minX: viewBox?.minX || 0,
            minY: viewBox?.minY || 0,
            width: viewBox?.width || 100,
            height: viewBox?.height || 100,
          },
          customUnit: unit || 'px',
          customFill: fill || '#000',
        };
      case 'arrow-up-right-from-square':
        return {
          customSize: {
            width: size ? `${size}${unit || 'px'}` : '16px',
            height: size ? `${size}${unit || 'px'}` : '16px',
          },
          customViewBox: {
            minX: viewBox?.minX || 0,
            minY: viewBox?.minY || 0,
            width: viewBox?.width || 100,
            height: viewBox?.height || 100,
          },
          customUnit: unit || 'px',
          customFill: fill || '#000',
        };
      case 'car-list':
        return {
          customSize: {
            width: size ? `${size}${unit || 'px'}` : '40px',
            height: size ? `${size}${unit || 'px'}` : '40px',
          },
          customViewBox: {
            minX: viewBox?.minX || 0,
            minY: viewBox?.minY || 0,
            width: viewBox?.width || 500,
            height: viewBox?.height || 500,
          },
          customUnit: unit || 'px',
          customFill: fill || '#000',
        };
      default:
        return {
          customSize: {
            width: size ? `${size}${unit || 'px'}` : '16px',
            height: size ? `${size}${unit || 'px'}` : '16px',
          },
          customViewBox: {
            minX: viewBox?.minX || 0,
            minY: viewBox?.minY || 0,
            width: viewBox?.width || 100,
            height: viewBox?.height || 100,
          },
          customUnit: unit || 'px',
          customFill: fill || '#000',
        };
    }
  };

  useEffect(() => {
    setDefaultValue(getDefaultValues(icon));
  }, [icon, size, viewBox, unit, fill]);

  const getPath = iconProps => {
    switch (iconProps) {
      case 'paper-clip':
        return (
          <path d="M9 6a5 5 0 0 1 10 0v18a3 3 0 0 1-6 0V10a1 1 0 0 1 2 0v14a1 1 0 0 0 2 0V6a3 3 0 1 0-6 0v18a5 5 0 0 0 10 0V10a1 1 0 0 1 2 0v14a7 7 0 1 1-14 0z" />
        );
      case 'info':
        return (
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
        );
      case 'user':
        return (
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
        );
      case 'send-email':
        return (
          <>
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zm.192 8.159 6.57-4.027L8 9.586l1.239-.757.367.225A4.49 4.49 0 0 0 8 12.5c0 .526.09 1.03.256 1.5H2a2 2 0 0 1-1.808-1.144M16 4.697v4.974A4.5 4.5 0 0 0 12.5 8a4.5 4.5 0 0 0-1.965.45l-.338-.207z" />
            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.354 1.25 1.25a.5.5 0 0 1-.708.708L13 12.207V14a.5.5 0 0 1-1 0v-1.717l-.28.305a.5.5 0 0 1-.737-.676l1.149-1.25a.5.5 0 0 1 .722-.016" />
          </>
        );
      case 'cart':
        return (
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
        );
      case 'arrows-expand':
        return (
          <path d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707" />
        );
      case 'qr-code-scan':
        return (
          <>
            <path d="M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1v2.5a.5.5 0 0 1-1 0zm12 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1h-2.5a.5.5 0 0 1-.5-.5M.5 12a.5.5 0 0 1 .5.5V15h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H15v-2.5a.5.5 0 0 1 .5-.5M4 4h1v1H4z" />
            <path d="M7 2H2v5h5zM3 3h3v3H3zm2 8H4v1h1z" />
            <path d="M7 9H2v5h5zm-4 1h3v3H3zm8-6h1v1h-1z" />
            <path d="M9 2h5v5H9zm1 1v3h3V3zM8 8v2h1v1H8v1h2v-2h1v2h1v-1h2v-1h-3V8zm2 2H9V9h1zm4 2h-1v1h-2v1h3zm-4 2v-1H8v1z" />
            <path d="M12 9h2V8h-2z" />
          </>
        );
      case 'repair':
        return (
          <>
            <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
              <path
                d="M 89.161 11.093 c -0.109 -0.329 -0.381 -0.578 -0.719 -0.658 c -0.334 -0.078 -0.692 0.02 -0.937 0.266 l -7.189 7.189 c -1.096 1.096 -2.553 1.7 -4.104 1.7 c -1.55 0 -3.007 -0.603 -4.104 -1.699 c -2.262 -2.263 -2.262 -5.944 0 -8.207 l 7.189 -7.189 c 0.245 -0.245 0.346 -0.6 0.266 -0.937 c -0.079 -0.337 -0.329 -0.609 -0.658 -0.719 c -5.863 -1.945 -12.216 -0.449 -16.57 3.906 c -4.463 4.462 -5.916 11.049 -3.792 16.948 L 21.693 58.544 c -5.897 -2.124 -12.485 -0.67 -16.948 3.792 C 0.39 66.691 -1.107 73.04 0.838 78.906 c 0.109 0.329 0.381 0.579 0.719 0.658 c 0.335 0.081 0.692 -0.021 0.937 -0.266 l 7.189 -7.189 c 2.261 -2.263 5.943 -2.263 8.207 0 c 1.096 1.096 1.699 2.553 1.699 4.104 s -0.603 3.007 -1.7 4.104 l -7.189 7.189 c -0.245 0.245 -0.346 0.599 -0.266 0.937 c 0.08 0.338 0.329 0.609 0.658 0.719 c 1.7 0.563 3.44 0.839 5.16 0.839 c 4.218 0 8.317 -1.652 11.41 -4.745 c 4.463 -4.463 5.917 -11.049 3.793 -16.948 l 36.851 -36.851 c 5.9 2.123 12.485 0.671 16.948 -3.793 C 89.611 23.309 91.107 16.959 89.161 11.093 z"
                transform=" matrix(1 0 0 1 0 0) "
                strokeLinecap="round"
              />
              <path
                d="M 72.088 57.275 c -0.177 -0.177 -0.413 -0.28 -0.662 -0.292 c -3.462 -0.155 -7.078 -1.876 -9.923 -4.721 c -1.742 -1.743 -3.065 -3.782 -3.863 -5.897 L 46.517 57.488 c 2.115 0.799 4.154 2.121 5.897 3.863 c 2.845 2.846 4.565 6.462 4.721 9.923 c 0.012 0.249 0.115 0.485 0.292 0.662 l 14.876 14.876 c 2.021 2.021 4.676 3.031 7.33 3.031 c 2.655 0 5.311 -1.01 7.331 -3.031 c 4.041 -4.042 4.041 -10.619 0 -14.661 L 72.088 57.275 z"
                transform=" matrix(1 0 0 1 0 0) "
                strokeLinecap="round"
              />
              <path
                d="M 5.351 14.171 c 0.123 0.219 0.324 0.384 0.563 0.462 l 5.82 1.89 l 23.869 23.869 l 4.638 -4.638 L 16.372 11.885 l -1.891 -5.82 c -0.078 -0.239 -0.243 -0.44 -0.462 -0.563 L 4.714 0.279 c -0.391 -0.219 -0.88 -0.151 -1.196 0.165 L 0.293 3.668 c -0.317 0.317 -0.384 0.806 -0.165 1.196 L 5.351 14.171 z"
                transform=" matrix(1 0 0 1 0 0) "
                strokeLinecap="round"
              />
            </g>
          </>
        );
      case 'g':
        return (
          <>
            <path
              className="cls-1"
              d="m10.22,29.54c-.06.39-.1.78-.12,1.18l-.03.5v37.64c0,3.73,1.6,6.84,4.89,9.51,3.31,2.67,7.15,3.96,11.74,3.96h46.59c4.6,0,8.43-1.3,11.72-3.96,3.3-2.66,4.9-5.77,4.9-9.51v-24.85h-33.36v11.88h18.7v11.4c0,1.92-1.49,3.15-3.8,3.15H28.54c-1.31,0-2.4-.47-3.1-1.36-.48-.66-.71-1.23-.71-1.79V29.55"
            />
            <path
              className="cls-2"
              d="m26.74,17.67c-8.54,0-15.53,5.13-16.52,11.88h79.67v-11.88H26.74Z"
            />
          </>
        );
      case 'arrow-up-right-from-square':
        return (
          <>
            <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
          </>
        );
      case 'car-list':
        return (
          <>
            <g id="outline">
              <path
                className="cls-1"
                d="M369,5c11.05,0,20,8.95,20,20v440c0,11.05-8.95,20-20,20H25c-11.05,0-20-8.95-20-20V25C5,13.95,13.95,5,25,5h344M369,0H25C11.21,0,0,11.21,0,25v440c0,13.79,11.21,25,25,25h344c13.79,0,25-11.21,25-25V25c0-13.79-11.21-25-25-25h0Z"
              />
            </g>
            <g id="car">
              <path
                className="cls-1"
                d="M336.83,117.43l-19.47-30.99c-6.59-10.47-18.09-16.83-30.46-16.83h-90.68c-15.25,0-29.87,6.13-40.55,17.02l-25.88,26.39-61.72,14.29c-10.3,2.39-17.59,11.57-17.59,22.14v24.24c0,5.22,4.24,9.47,9.47,9.47h32.82c-.04.65-.11,1.3-.11,1.96,0,17.06,13.83,30.88,30.89,30.88s30.88-13.83,30.88-30.88c0-.66-.06-1.31-.11-1.96h97.11c-.04.65-.11,1.3-.11,1.96,0,17.06,13.83,30.88,30.88,30.88s30.88-13.83,30.88-30.88c0-.66-.05-1.31-.09-1.96h21.06c5.23,0,9.47-4.24,9.47-9.47v-33.09c0-8.2-2.32-16.23-6.68-23.17ZM123.55,197.43c-6.8,0-12.3-5.52-12.3-12.31s5.5-12.3,12.3-12.3,12.3,5.51,12.3,12.3-5.51,12.31-12.3,12.31ZM201.65,119.77h-55.62l21.29-21.71c7.56-7.71,18.1-12.13,28.91-12.13h5.43v33.84h0ZM265.11,119.77h-49.19v-33.84h49.19v33.84ZM282.21,197.43c-6.79,0-12.3-5.52-12.3-12.31s5.51-12.3,12.3-12.3,12.3,5.51,12.3,12.3c0,6.79-5.5,12.31-12.3,12.31ZM279.38,119.77v-33.84h7.52c6.8,0,13.02,3.44,16.64,9.19l15.49,24.65h-39.65Z"
              />
            </g>
            <g id="list">
              <g id="item1">
                <g>
                  <rect
                    className="cls-2"
                    x="50"
                    y="277"
                    width="30"
                    height="30"
                    rx="4"
                    ry="4"
                  />
                  <rect
                    className="cls-1"
                    x="104"
                    y="280"
                    width="240"
                    height="24"
                    rx="4"
                    ry="4"
                  />
                </g>
                <path
                  className="cls-1"
                  d="M82.85,269.81l-19.8,19.8-9.9-9.9c-1.56-1.56-4.09-1.56-5.66,0l-1.41,1.41c-1.56,1.56-1.56,4.09,0,5.66l12.73,12.73,1.41,1.41c1.56,1.56,4.09,1.56,5.66,0l1.41-1.41,22.63-22.63c1.56-1.56,1.56-4.09,0-5.66l-1.41-1.41c-1.56-1.56-4.09-1.56-5.66,0Z"
                />
              </g>
              <g id="item2">
                <g>
                  <rect
                    className="cls-2"
                    x="49.74"
                    y="338.63"
                    width="30"
                    height="30"
                    rx="4"
                    ry="4"
                  />
                  <rect
                    className="cls-1"
                    x="103.74"
                    y="341.63"
                    width="240"
                    height="24"
                    rx="4"
                    ry="4"
                  />
                </g>
                <path
                  className="cls-1"
                  d="M82.59,331.43l-19.8,19.8-9.9-9.9c-1.56-1.56-4.09-1.56-5.66,0l-1.41,1.41c-1.56,1.56-1.56,4.09,0,5.66l12.73,12.73,1.41,1.41c1.56,1.56,4.09,1.56,5.66,0l1.41-1.41,22.63-22.63c1.56-1.56,1.56-4.09,0-5.66l-1.41-1.41c-1.56-1.56-4.09-1.56-5.66,0Z"
                />
              </g>
              <g id="item3">
                <g>
                  <rect
                    className="cls-2"
                    x="49.74"
                    y="400.63"
                    width="30"
                    height="30"
                    rx="4"
                    ry="4"
                  />
                  <rect
                    className="cls-1"
                    x="103.74"
                    y="403.63"
                    width="240"
                    height="24"
                    rx="4"
                    ry="4"
                  />
                </g>
                <path
                  className="cls-1"
                  d="M82.59,393.43l-19.8,19.8-9.9-9.9c-1.56-1.56-4.09-1.56-5.66,0l-1.41,1.41c-1.56,1.56-1.56,4.09,0,5.66l12.73,12.73,1.41,1.41c1.56,1.56,4.09,1.56,5.66,0l1.41-1.41,22.63-22.63c1.56-1.56,1.56-4.09,0-5.66l-1.41-1.41c-1.56-1.56-4.09-1.56-5.66,0Z"
                />
              </g>
            </g>
          </>
        );
      default:
        return (
          <>
            <path d="M0 0h100v100H0z" />
          </>
        );
    }
  };

  return (
    <>
      <svg
        className={`custom-icons-${icon}`}
        width={defaultValue.customSize.width}
        height={defaultValue.customSize.height}
        viewBox={`${defaultValue.customViewBox.minX} ${defaultValue.customViewBox.minY} ${defaultValue.customViewBox.width} ${defaultValue.customViewBox.height}`}
        fill={defaultValue.customFill}
      >
        {getPath(icon)}
      </svg>
    </>
  );
};

export default CustomIcons;
