export const getPrevPageUrl = () => {
	const prevPageUrl = sessionStorage.getItem("prevPageUrl");

	if (!prevPageUrl) {
		return "/";
	}

	return prevPageUrl;
};
