export default function ({ redirect, $strapi }) {
  if (!$strapi.user) {
    return redirect('/member/auth')
  }
}
