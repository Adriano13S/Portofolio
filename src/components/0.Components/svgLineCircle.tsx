interface ISvgLineCircleComponent {
  className?: string
  fillCircle: string
  colorCircle: string
  colorLine: string
  circleSize: string
  lineSize: number
  type?: string
};

export const SvgLineCircleComponent: React.FC<ISvgLineCircleComponent> = 
({ fillCircle,
  colorCircle,
  colorLine,
  lineSize,
  circleSize,
  className,
  type,
}) => {
    switch(type){
      case 'top-right':
        return(
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="32" width={lineSize} aria-hidden="true">
            <rect y="3" x="18.5" width="2" height="20"  fill={colorLine}/>
            <rect y="20.2" x="18.5" width="17" height="2" fill={colorLine}/>
            <circle cx={lineSize/2 + 0.5} cy="20" fill={fillCircle} r={circleSize} stroke={colorCircle} strokeWidth="2"></circle>
          </svg>
        );
      case 'left-bot':
        return(
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="32" width={lineSize} aria-hidden="true">
            <rect y="8" x="18.5" width="2" height="20"  fill={colorLine}/>
            <rect y="8" x="3" width="20" height="2" fill={colorLine}/>
            <circle cx={lineSize/2 + 0.5} cy="9" fill={fillCircle} r={circleSize} stroke={colorCircle} strokeWidth="2"></circle>
          </svg>
        );
      case 'right':
        return(
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="32" width={lineSize} aria-hidden="true">
            <rect y="14" x="18.5" width="20" height="2" fill={colorLine}/>
            <circle cx={lineSize/2 + 0.5} cy="15" fill={fillCircle} r={circleSize} stroke={colorCircle} strokeWidth="2"></circle>
          </svg>
        );
      case 'left':
        return(
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="32" width={lineSize} aria-hidden="true">
            <rect y="14" x="0" width="20" height="2" fill={colorLine}/>
            <circle cx={lineSize/2 + 0.5} cy="15" fill={fillCircle} r={circleSize} stroke={colorCircle} strokeWidth="2"></circle>
          </svg>
        );
      default:
        return(
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="32" width={lineSize} aria-hidden="true">
            <rect y="14" x="0" width="40" height="2" fill={colorLine}/>
            <circle cx={lineSize/2 + 0.5} cy="15" fill={fillCircle} r={circleSize} stroke={colorCircle} strokeWidth="2"></circle>
          </svg>
        );
    };
  };
