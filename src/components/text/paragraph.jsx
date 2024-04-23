import React from 'react'

export default function Paragraph({text='',styles=''}) {
  return (
    <>
      <p className={`font-regular  ${styles}`}>{text}</p>
    </>
  );
}
