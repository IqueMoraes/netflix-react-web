import React from 'react';
import { ArrowButton } from 'components/shows-list/components/arrow/arrow.style';

export default function Arrow({
  style,
  onClick,
  className,
}: any) {
  return (
    <ArrowButton
      className={className}
      style={style}
      onClick={onClick}
    />
  );
}
