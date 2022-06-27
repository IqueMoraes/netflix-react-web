import React from 'react';
import { Props } from './netflix-logo.type';

export default function NetflixLogo({ width, height }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 800 217"
    >
      <g clipPath="url(#clip0_101_325)">
        <path
          fill="#B9090B"
          d="M110.002 202.269c-12.034 2.113-24.28 2.747-36.948 4.434L34.414 93.534V211.56C22.38 212.827 11.403 214.516 0 216.205V0h32.094l43.915 122.673V0h33.993v202.269zm66.509-123.092c13.091 0 33.149-.634 45.184-.634v33.781c-14.992 0-32.515 0-45.184.634v50.251c19.848-1.266 39.694-2.957 59.751-3.59v32.513l-93.534 7.391V0h93.534v33.782h-59.751v45.395zm185.378-45.394h-35.048V189.18c-11.402 0-22.803 0-33.781.421V33.783h-35.048V0h103.879l-.002 33.783zm54.895 43.072h46.24v33.781h-46.24v76.644h-33.15V0h94.381v33.782h-61.231v43.073zM532.91 157.72c19.214.421 38.638 1.901 57.43 2.955v33.36c-30.192-1.901-60.385-3.799-91.211-4.434V0h33.781v157.72zm85.933 38.638c10.768.634 22.17 1.268 33.148 2.533V0h-33.148v196.358zM800 0l-42.862 102.824L800 216.205c-12.67-1.689-25.338-4.012-38.006-6.124l-24.28-62.495-24.701 57.43c-12.248-2.114-24.072-2.747-36.315-4.436l43.493-99.024L680.919 0h36.314l22.169 56.796L763.051 0H800z"
        />
      </g>
      <defs>
        <clipPath id="clip0_101_325">
          <path fill="#fff" d="M0 0H800V216.205H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}