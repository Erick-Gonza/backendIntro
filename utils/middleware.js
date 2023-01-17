export const isAdmin = (req, res, next) => {
  const { isAdmin } = req.query
  if (isAdmin === 'true') {
    next()
  } else {
    res.send({
      message: 'You are not an admin',
    })
  }
}
