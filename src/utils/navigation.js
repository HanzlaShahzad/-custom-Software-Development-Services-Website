export function getContextualPath(destination) {
  const currentPath = window.location.pathname.replace(/\/+$/, "");
  const destinationPath = destination.replace(/^\/+|\/+$/g, "");
  if (currentPath.endsWith(`/${destinationPath}`)) return currentPath;
  return currentPath ? `${currentPath}/${destinationPath}` : `/${destinationPath}`;
}

export function getContextualContactUsPath() {
  return getContextualPath("contact-us");
}

export function getContextualAboutUsPath() {
  return getContextualPath("about-us");
}

export function getContextualOurWorkPath() {
  return getContextualPath("our-work");
}
