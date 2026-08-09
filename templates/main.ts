/**
 * KungFuWiki
 * Copyright (c) 2024-2026 Amir Czwink
 *
 * Licensed under the MIT License.
 * See the LICENSE file in the project root for license information.
 */

import { MainCategory } from "../src/contentDefinitions";

interface MainPageParams
{
	activeCategory?: MainCategory;
	categories: MainCategory[];
	pageContent: string;
}

function RenderNav(categories: MainCategory[], activeCategory?: MainCategory)
{
	function GetClassName(isActive: boolean)
	{
		const className = isActive ? " active" : "";
		return `flex-sm-fill text-sm-center nav-link${className}`;
	}

	const cats = categories.map(x => {
		return `<a class="${GetClassName(x === activeCategory)}" aria-current="page" href="${x.name}.html">${x.displayText}</a>`;
	});

	return `<nav class="nav nav-pills flex-column flex-sm-row sticky-top bg-body">
		${cats.join("")}
	</nav>`;
}

function RenderFooter()
{
	const d = new Date();
	return `
	<ul class="list-unstyled text-body-secondary d-flex justify-content-center">
		<li>© 2024-${d.getUTCFullYear()} Amir Czwink</li>
		<li class="ms-3"><a class="text-body-secondary" href="https://github.com/aczwink/KungFuWiki/blob/main/LICENSE" target="_blank">MIT Licensed</a></li>
		<li class="ms-3">
			<a class="text-body-secondary" href="https://github.com/aczwink/KungFuWiki" target="_blank">
				<i class="bi bi-github"></i>
			</a>
		</li>
	</ul>
	`;
}

export function RenderMain(params: MainPageParams)
{
	return `<!doctype html>
	<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<base href="/">
		<title>Kung Fu documentation</title>
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
	</head>
	<body>
		<script>
		document.documentElement.setAttribute('data-bs-theme', (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
		</script>
		<div class="container" id="home">
			<img src="images/logo.png" style="position: absolute; top: 0; left: 0; height: 10rem" />
			${RenderNav(params.categories, params.activeCategory)}

			${params.pageContent}

			${RenderFooter()}
		</div>
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
	</body>
	</html>
	`;
}
