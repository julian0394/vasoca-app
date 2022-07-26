import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import QrCode2Icon from '@mui/icons-material/QrCode2';

const infoList = [
  {
    tooltip: 'Whatsapp',
    text: '+54 9 11 2389-8137',
    icon: WhatsAppIcon,
    route: 'https://wa.me/5491123898137',
    id: 1
  },
  {
    tooltip: 'QR Whatsapp',
    text: 'Escanea el QR y chatea',
    icon: QrCode2Icon,
    route: '',
    id: 2
  },
  {
    tooltip: 'Instagram',
    text: '@vasoca.vape',
    icon: InstagramIcon,
    route: 'https://www.instagram.com/vasoca.vape',
    id: 3
  },
  {
    tooltip: 'Facebook',
    text: '@vasocavape',
    icon: FacebookIcon,
    route: 'https://www.facebook.com/vasocavape',
    id: 4
  }, 
]

export default infoList;