// == Images =====================================================
export const enum SocialIconsImages {
	Github = '/assets/images/social-icons/github.png',
	Gitlab = '/assets/images/social-icons/gitlab.png',
	Linkedin = '/assets/images/social-icons/linkedin.png'
}

export const enum GeneralImages {
	Printer = '/assets/images/printer.png',
	Profile = '/assets/images/me.jpg'
}

export const enum CompaniesImages {
	GaragePhoto = '/assets/images/companies/garage.png',
	HmsPhoto = '/assets/images/companies/hms.png',
	IngeniatPhoto = '/assets/images/companies/ingeniat.png',
	IntersogPhoto = '/assets/images/companies/intersog.png',
	SensaiPhoto = '/assets/images/companies/sensai.jpg',
	SintecPhoto = '/assets/images/companies/sintec.png'
}

// == Positions =====================================================
export interface IPosition {
	name: string;
	startAt: string;
	endAt?: string;
	company: {
		name: string;
		photo: string;
	};
	responsibilities: string[];
	achievements: string[];
	technicalEnv: string;
}

// == Technologies ==================================================
export enum TechnologyStatus {
	Current = 'Current',
	Learning = 'Learning',
	Used = 'Used'
}

export type Technology = {
	name: string;
	status: TechnologyStatus;
	icon?: string;
	yearsOfExp?: string;
};
