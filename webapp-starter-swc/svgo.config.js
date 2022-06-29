module.exports = {
  plugins: [
    {
      // Ensure `viewBox` is always present for SVG's so they're responsive
      name: 'removeViewBox',
      active: false,
    },
  ],
}
