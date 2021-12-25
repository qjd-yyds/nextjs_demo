import React from 'react';
// eslint-disable-next-line react/display-name
const CustomLink = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} ref={ref} style={{ color: 'red' }}>
      函数子组件跳转 book/one
    </a>
  );
});

export default CustomLink;
