export const join = (req, res) => res.render("join", { pageTitle: "Join" });
export const login = (req, res) => res.render("login", { pageTitle: "Log In" });
export const logout = (req, res) =>
render("logout", { pageTitle: "Log Out" });
export const userDetail = (req, res) =>
render("userDetail", { pageTitle: "User Detail" });
export const editProfile = (req, res) =>
render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) =>
render("changePassword", { pageTitle: "Change Password" });