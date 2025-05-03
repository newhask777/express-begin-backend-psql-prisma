// @desc Auth user
// @route POST /api/users/login
// @access Public
export const authUser = async (reg, res) => {
  res.json({
      message: 'You are authenticated'
  })
}