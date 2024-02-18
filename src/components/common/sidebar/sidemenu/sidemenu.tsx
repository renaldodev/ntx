import { Icon } from "@iconify/react";

export const MENUITEMS = [
	{
		Items: [
			{
				icon: (
					<Icon
						icon="humbleicons:home"
						fontSize={20}
						className="side-menu__icon"
					/>
				),
				type: "link",
				Name: "",
				active: false,
				selected: false,
				title: "Início",
				path: "/home",
				badge: "",
				badgetxt: "",
				class: "badge bg-warning-transparent ms-2",
			},
		],
	},
	{
		// menutitle: "MAIN",
		Items: [
			{
				icon: (
					<Icon
						icon="emojione:construction-worker-medium-skin-tone"
						fontSize={20}
						color="black"
						className="side-menu__icon"
					/>
				),
				type: "sub",
				Name: "",
				active: false,
				selected: false,
				title: "Operadores",
				badge: "",
				badgetxt: "",
				class: "badge bg-warning-transparent ms-2",
				children: [
					{
						path: "/operador/management",
						type: "link",
						active: false,
						selected: false,
						title: "Gestão",
						icon: (
							<Icon
								icon="material-symbols:manage-accounts"
								fontSize={20}
								className="side-menu__icon"
							/>
						),
					},
					{
						path: "/operador/create",
						type: "link",
						active: false,
						selected: false,
						title: "Cadastrar",
						icon: (
							<Icon
								icon="ci:user-add"
								fontSize={20}
								className="side-menu__icon"
							/>
						),
					},
					{
						/*  {
            path: "/operador/statistics",
            type: "link",
            active: false,
            selected: false,
            title: "Estatisticas",
            icon: (
              <Icon
                icon="prime:chart-line"
                fontSize={20}
                className="side-menu__icon"
              />
            ),
          },
          {
            path: "/operador/report",
            type: "link",
            active: false,
            selected: false,
            title: "Relatorio",
            icon: (
              <Icon
                icon="carbon:report"
                fontSize={20}
                className="side-menu__icon"
              />
            ),
          }, */
					},
				],
			},
		],
	},
	{
		// menutitle: "PAGES",
		Items: [
			{
				icon: (
					<Icon
						icon="teenyicons:box-solid"
						fontSize={20}
						className="side-menu__icon"
					/>
				),
				type: "sub",
				Name: "",
				active: false,
				selected: false,
				title: "Blocos",
				badge: "",
				badgetxt: "",
				class: "badge bg-warning-transparent ms-2",
				children: [
					{
						path: "/bloco/management",
						type: "link",
						active: false,
						selected: false,
						title: "Gestão",
						icon: (
							<Icon
								icon="material-symbols:manage-accounts"
								fontSize={20}
								className="side-menu__icon"
							/>
						),
					},
					{
						/*	{
						path: "/bloco/create",
						type: "link",
						active: false,
						selected: false,
						title: "Cadastrar",
						icon: (
							<Icon
								icon="ci:user-add"
								fontSize={20}
								className="side-menu__icon"
							/>
						),
					},
					{
						path: "/bloco/statistics",
						type: "link",
						active: false,
						selected: false,
						title: "Estatisticas",
						icon: (
							<Icon
								icon="prime:chart-line"
								fontSize={20}
								className="side-menu__icon"
							/>
						),
					},
					{
						path: "/bloco/report",
						type: "link",
						active: false,
						selected: false,
						title: "Relatorio",
						icon: (
							<Icon
								icon="carbon:report"
								fontSize={20}
								className="side-menu__icon"
							/>
						),
					},*/
					},
				],
			},
		],
	},

	{
		// menutitle: "PAGES",
		Items: [
			{
				icon: (
					<Icon
						icon="game-icons:oil-rig"
						fontSize={20}
						className="side-menu__icon"
					/>
				),
				type: "sub",
				Name: "",
				active: false,
				selected: false,
				title: "Plataformas",
				badge: "",
				badgetxt: "",
				class: "badge bg-warning-transparent ms-2",
				children: [
					{
						path: "/plataforma/management",
						type: "link",
						active: false,
						selected: false,
						title: "Gestão",
						icon: (
							<Icon
								icon="material-symbols:manage-accounts"
								fontSize={20}
								className="side-menu__icon"
							/>
						),
					},
					{
						path: "/plataforma/create",
						type: "link",
						active: false,
						selected: false,
						title: "Cadastrar",
						icon: (
							<Icon
								icon="ci:user-add"
								fontSize={20}
								className="side-menu__icon"
							/>
						),
					},
					{
						/*	{
						path: "/plataforma/statistics",
						type: "link",
						active: false,
						selected: false,
						title: "Estatisticas",
						icon: (
							<Icon
								icon="prime:chart-line"
								fontSize={20}
								className="side-menu__icon"
							/>
						),
					},
					{
						path: "/plataforma/report",
						type: "link",
						active: false,
						selected: false,
						title: "Relatorio",
						icon: (
							<Icon
								icon="carbon:report"
								fontSize={20}
								className="side-menu__icon"
							/>
						),
					},*/
					},
				],
			},
		],
	},

	{
		// menutitle: "PAGES",
		Items: [
			{
				icon: (
					<Icon
						icon="openmoji:oil-spill"
						fontSize={20}
						className="side-menu__icon"
					/>
				),
				type: "sub",
				Name: "",
				active: false,
				selected: false,
				title: "Poços",
				badge: "",
				badgetxt: "",
				class: "badge bg-warning-transparent ms-2",
				children: [
					{
						path: "/poco/management",
						type: "link",
						active: false,
						selected: false,
						title: "Gestão",
						icon: (
							<Icon
								icon="material-symbols:manage-accounts"
								fontSize={20}
								className="side-menu__icon"
							/>
						),
					},
					{
						/*	{
						path: "/poco/create",
						type: "link",
						active: false,
						selected: false,
						title: "Cadastrar",
						icon: (
							<Icon
								icon="ci:user-add"
								fontSize={20}
								className="side-menu__icon"
							/>
						),
					},
					{
						path: "/poco/statistics",
						type: "link",
						active: false,
						selected: false,
						title: "Estatisticas",
						icon: (
							<Icon
								icon="prime:chart-line"
								fontSize={20}
								className="side-menu__icon"
							/>
						),
					},
					{
						path: "/poco/report",
						type: "link",
						active: false,
						selected: false,
						title: "Relatorio",
						icon: (
							<Icon
								icon="carbon:report"
								fontSize={20}
								className="side-menu__icon"
							/>
						),
					},*/
					},
				],
			},
		],
	},

	{
		menutitle: "Admin",
		Items: [
			{
				icon: <i className="bx bx-map side-menu__icon"></i>,
				type: "sub",
				Name: "",
				active: false,
				selected: false,
				badge: "",
				badgetxt: "",
				class: "",
				title: "Reclamações",
			},
			{
				path: `/`,
				icon: <i className="bx bx-store-alt side-menu__icon"></i>,
				type: "link",
				selected: false,
				active: false,
				title: "Gestão",
			},
		],
	},
];
