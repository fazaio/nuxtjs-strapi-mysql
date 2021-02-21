export default function ({ redirect, $strapi, app }) {
  if (!$strapi.user) {
    app.$cookies.remove('strapi_jwt', {
      // this will allow you to remove a cookie
      // from a different path
      path: '/member',
    })
    $strapi.clearToken()
    return redirect('/member/auth')
  } else {
    return $strapi.user
  }
}
