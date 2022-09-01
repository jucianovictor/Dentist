import React from 'react';
import ClockIcon from '../icons/clock';
import FacebookIcon from '../icons/facebook';
import InstagramIcon from '../icons/instagram';
import LinkedinIcon from '../icons/linkedin';
import LocationIcon from '../icons/location';
import PhoneIcon from '../icons/phone';
import IconProps from '../interface/icon';
import PlayIcon from '../play-icon';
import WhatsappIcon from '../whatsapp-icon';

export type AvailableIcons =
	| 'whatsapp'
	| 'instagram'
	| 'linkedin'
	| 'facebook'
	| 'play'
	| 'phone'
	| 'clock'
	| 'location';

export type GlobalIconProps = { icon: AvailableIcons } & IconProps;

const icons: Record<AvailableIcons, (iconProps: IconProps) => JSX.Element> = {
	whatsapp: (iconProps: IconProps) => <WhatsappIcon {...iconProps} />,
	instagram: (iconProps: IconProps) => <InstagramIcon {...iconProps} />,
	linkedin: (iconProps: IconProps) => <LinkedinIcon {...iconProps} />,
	facebook: (iconProps: IconProps) => <FacebookIcon {...iconProps} />,
	play: (iconProps: IconProps) => <PlayIcon {...iconProps} />,
	phone: (iconProps: IconProps) => <PhoneIcon {...iconProps} />,
	clock: (iconProps: IconProps) => <ClockIcon {...iconProps} />,
	location: (iconProps: IconProps) => <LocationIcon {...iconProps} />,
};

const Icon: React.FC<GlobalIconProps> = ({
	icon,
	...iconProps
}: GlobalIconProps): JSX.Element => icons[icon](iconProps);

export default Icon;
