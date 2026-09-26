import { brandConfig } from '../../config/brand.config';

function BrandLogo({ className = '', ...props }) {
  return (
    <img
      src={brandConfig.logo}
      alt={brandConfig.name}
      className={`brand-logo ${className}`.trim()}
      width="56"
      height="56"
      decoding="async"
      {...props}
    />
  );
}

export default BrandLogo;
