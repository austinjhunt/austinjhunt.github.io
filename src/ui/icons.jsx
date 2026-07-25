import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiInstagram,
  FiExternalLink,
  FiLock,
  FiArrowUpRight,
  FiPlayCircle,
  FiFileText,
} from 'react-icons/fi';
import { SiUpwork, SiMedium, SiDribbble } from 'react-icons/si';
import { FaPalette } from 'react-icons/fa';

const map = {
  github: FiGithub,
  linkedin: FiLinkedin,
  email: FiMail,
  instagram: FiInstagram,
  upwork: SiUpwork,
  medium: SiMedium,
  palette: FaPalette,
  dribbble: SiDribbble,
  external: FiExternalLink,
  arrow: FiArrowUpRight,
  lock: FiLock,
  video: FiPlayCircle,
  doc: FiFileText,
};

export default function Icon({ name, className }) {
  const Cmp = map[name] || FiExternalLink;
  return <Cmp className={className} aria-hidden="true" />;
}
