import { brandConfig } from '../../config/brand.config';

function BrandLogo({ className = '', ...props }) {
  return (
    <img
      src={brandConfig.logo}
      alt={brandConfig.name}
      className={`brand-logo ${className}`.trim()}
      width="210"
      height="48"
      {...props}
    />
  );
}

export default BrandLogo;
