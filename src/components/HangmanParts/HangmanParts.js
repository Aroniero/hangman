import React from 'react';
import {
  StyledHead,
  StyledNeck,
  StyledBody,
  StyledRightArm,
  StyledLeftArm,
  StyledLeftLeg,
  StyledLeftFoot,
  StyledRightLeg,
  StyledRightFoot,
} from './HangmanParts.style';

export const Gallow = () => {
  return (
    <div>
      <svg
        width='254'
        height='103'
        viewBox='0 0 254 103'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M-13 10C-13 4.47715 -8.52285 0 -3 0H244C249.523 0 254 4.47715 254 10V30C254 35.5228 249.523 40 244 40H-3C-8.52285 40 -13 35.5228 -13 30V10Z'
          fill='#404040'
        />
        <path
          d='M200.151 40L200.151 93C200.151 98.5229 195.674 103 190.151 103L165.277 103C159.754 103 155.277 98.5228 155.277 93L155.277 40L200.151 40Z'
          fill='#404040'
        />
      </svg>
    </div>
  );
};

export const Head = () => {
  return (
    <StyledHead>
      <svg
        width='152'
        height='164'
        viewBox='0 0 152 164'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M137.5 78C139.404 78 141.29 77.612 143.049 76.8582C144.808 76.1044 146.407 74.9995 147.753 73.6066C149.099 72.2137 150.168 70.5601 150.896 68.7403C151.625 66.9204 152 64.9698 152 63C152 61.0302 151.625 59.0796 150.896 57.2597C150.168 55.4399 149.099 53.7863 147.753 52.3934C146.407 51.0005 144.808 49.8956 143.049 49.1418C141.29 48.388 139.404 48 137.5 48L137.5 63L137.5 78Z'
          fill='#F0EDD4'
        />
        <path
          d='M14.5 78C12.5958 78 10.7103 77.612 8.95109 76.8582C7.19187 76.1044 5.5934 74.9995 4.24695 73.6066C2.9005 72.2137 1.83244 70.5601 1.10375 68.7403C0.375054 66.9204 6.58541e-07 64.9698 6.55671e-07 63C6.52801e-07 61.0302 0.375054 59.0796 1.10375 57.2597C1.83244 55.4399 2.9005 53.7863 4.24695 52.3934C5.5934 51.0005 7.19187 49.8956 8.95109 49.1418C10.7103 48.388 12.5958 48 14.5 48L14.5 63L14.5 78Z'
          fill='#F0EDD4'
        />
        <path
          d='M140 82.7873C140 128.075 134.198 164 75 164C18.3021 164 10 128.075 10 82.7873C10 37.5 15.8021 0 75 0C134.198 0 140 37.5 140 82.7873Z'
          fill='#F0EDD4'
        />
        <path
          d='M140 82.7873C140 128.075 134.198 164 75 164C18.3021 164 10 128.075 10 82.7873C10 37.5 15.8021 102.287 75 102.287C134.198 102.287 140 37.5 140 82.7873Z'
          fill='#ABA676'
        />
        <path
          d='M93.1979 131.5C93.1979 127.124 91.3015 122.927 87.9258 119.833C84.5501 116.738 79.9718 115 75.1979 115C70.424 115 65.8456 116.738 62.47 119.833C59.0943 122.927 57.1979 127.124 57.1979 131.5L75.1979 131.5H93.1979Z'
          fill='white'
        />
        <circle cx='48.1979' cy='66.2874' r='10' fill='black' />
        <circle cx='102.198' cy='66.2874' r='10' fill='black' />
      </svg>
    </StyledHead>
  );
};

export const LeftArm = () => {
  return (
    <StyledLeftArm>
      <svg
        width='120'
        height='120'
        viewBox='0 0 120 120'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect
          width='36'
          height='131'
          transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 119.284 25.4558)'
          fill='#1FA4B6'
        />
        <mask id='path-2-inside-1' fill='white'>
          <path d='M21.2132 112.213C20.2846 113.142 19.1822 113.878 17.969 114.381C16.7557 114.883 15.4554 115.142 14.1421 115.142C12.8289 115.142 11.5286 114.883 10.3153 114.381C9.10204 113.878 7.99965 113.142 7.07107 112.213C6.14248 111.285 5.40589 110.182 4.90334 108.969C4.40079 107.756 4.14214 106.455 4.14214 105.142C4.14214 103.829 4.40079 102.529 4.90334 101.315C5.40589 100.102 6.14248 98.9996 7.07107 98.0711L14.1421 105.142L21.2132 112.213Z' />
        </mask>
        <path
          d='M21.2132 112.213C20.2846 113.142 19.1822 113.878 17.969 114.381C16.7557 114.883 15.4554 115.142 14.1421 115.142C12.8289 115.142 11.5286 114.883 10.3153 114.381C9.10204 113.878 7.99965 113.142 7.07107 112.213C6.14248 111.285 5.40589 110.182 4.90334 108.969C4.40079 107.756 4.14214 106.455 4.14214 105.142C4.14214 103.829 4.40079 102.529 4.90334 101.315C5.40589 100.102 6.14248 98.9996 7.07107 98.0711L14.1421 105.142L21.2132 112.213Z'
          fill='#C2BC81'
          stroke='black'
          strokeWidth='2'
          mask='url(#path-2-inside-1)'
        />
      </svg>
    </StyledLeftArm>
  );
};

export const LeftFoot = () => {
  return (
    <StyledLeftFoot>
      <svg
        width='62'
        height='31'
        viewBox='0 0 62 31'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect
          width='59'
          height='15.5493'
          rx='6'
          transform='matrix(-0.965926 -0.258819 -0.258819 0.965926 61.0141 15.2703)'
          fill='black'
        />
      </svg>
    </StyledLeftFoot>
  );
};

export const LeftLeg = () => {
  return (
    <StyledLeftLeg>
      <svg
        width='72'
        height='146'
        viewBox='0 0 72 146'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect
          width='36'
          height='141.204'
          transform='matrix(-0.965926 -0.258819 -0.258819 0.965926 71.3196 9.3175)'
          fill='#247B2D'
        />
      </svg>
    </StyledLeftLeg>
  );
};

export const Neck = () => {
  return (
    <StyledNeck>
      <svg
        width='30'
        height='22'
        viewBox='0 0 30 22'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect width='30' height='22' fill='#F0EDD4' />
      </svg>
    </StyledNeck>
  );
};

export const RightArm = () => {
  return (
    <StyledRightArm>
      <svg
        width='120'
        height='120'
        viewBox='0 0 120 120'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect
          y='25.4558'
          width='36'
          height='131'
          transform='rotate(-45 0 25.4558)'
          fill='#565BBB'
        />
        <mask id='path-2-inside-1' fill='white'>
          <path d='M98.071 112.213C98.9996 113.142 100.102 113.878 101.315 114.381C102.529 114.883 103.829 115.142 105.142 115.142C106.455 115.142 107.756 114.883 108.969 114.381C110.182 113.878 111.285 113.142 112.213 112.213C113.142 111.285 113.878 110.182 114.381 108.969C114.883 107.756 115.142 106.455 115.142 105.142C115.142 103.829 114.883 102.529 114.381 101.315C113.878 100.102 113.142 98.9996 112.213 98.0711L105.142 105.142L98.071 112.213Z' />
        </mask>
        <path
          d='M98.071 112.213C98.9996 113.142 100.102 113.878 101.315 114.381C102.529 114.883 103.829 115.142 105.142 115.142C106.455 115.142 107.756 114.883 108.969 114.381C110.182 113.878 111.285 113.142 112.213 112.213C113.142 111.285 113.878 110.182 114.381 108.969C114.883 107.756 115.142 106.455 115.142 105.142C115.142 103.829 114.883 102.529 114.381 101.315C113.878 100.102 113.142 98.9996 112.213 98.0711L105.142 105.142L98.071 112.213Z'
          fill='#C2BC81'
          stroke='black'
          strokeWidth='2'
          mask='url(#path-2-inside-1)'
        />
      </svg>
    </StyledRightArm>
  );
};

export const RightFoot = () => {
  return (
    <StyledRightFoot>
      <svg
        width='62'
        height='31'
        viewBox='0 0 62 31'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect
          y='15.2703'
          width='59'
          height='15.5493'
          rx='6'
          transform='rotate(-15 0 15.2703)'
          fill='black'
        />
      </svg>
    </StyledRightFoot>
  );
};

export const RightLeg = () => {
  return (
    <StyledRightLeg>
      <svg
        width='72'
        height='146'
        viewBox='0 0 72 146'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect
          y='9.3175'
          width='36'
          height='141.204'
          transform='rotate(-15 0 9.3175)'
          fill='#247B2D'
        />
      </svg>
    </StyledRightLeg>
  );
};

export const Body = () => {
  return (
    <StyledBody>
      <svg
        width='112'
        height='180'
        viewBox='0 0 112 180'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect x='56' width='56' height='131' fill='#565BBB' />
        <rect
          width='56'
          height='131'
          transform='matrix(-1 0 0 1 56.2842 0)'
          fill='#1FA4B6'
        />
        <path
          d='M112 131C112 143.977 111.862 162.925 101.36 172.102C90.8584 181.278 70.853 179.931 56.0012 179.931C41.1494 179.931 20.5839 181.278 10.0821 172.102C-0.419705 162.925 0.00233766 143.977 0.00233542 131L56.0012 131H112Z'
          fill='#247B2D'
        />
      </svg>
    </StyledBody>
  );
};
