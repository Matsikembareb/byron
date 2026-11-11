// Tech logos from Simple Icons (CC0), keyed by the blog tag that names the tech.
// Add one by importing its SVG with ?raw and listing it below; drawn in one colour, so it suits both themes.
import django from 'simple-icons/icons/django.svg?raw';
import fastapi from 'simple-icons/icons/fastapi.svg?raw';
import flask from 'simple-icons/icons/flask.svg?raw';
import python from 'simple-icons/icons/python.svg?raw';

const pathOf = (svg: string) => svg.match(/ d="([^"]+)"/)![1];

export const LOGOS = {
  python: pathOf(python),
  flask: pathOf(flask),
  django: pathOf(django),
  fastapi: pathOf(fastapi),
};

export type LogoName = keyof typeof LOGOS;

export const isLogo = (name: string): name is LogoName => Object.hasOwn(LOGOS, name);
