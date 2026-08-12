/**
 * Portfolio Configuration
 *
 * This file is NOT bundled during build, so it can be edited directly on the server
 * without rebuilding the application.
 *
 * Usage:
 * - Local data   : DATA_BASE_URL = ''  (empty = use /data/*.json files)
 * - CDN / remote : DATA_BASE_URL = 'https://cdn.example.com'
 * - Own server   : DATA_BASE_URL = 'https://api.syifarahmat.me'
 *
 * Required endpoint structure:
 *   {DATA_BASE_URL}/data/skills.json
 *   {DATA_BASE_URL}/data/projects.json
 *   {DATA_BASE_URL}/data/experience.json
 */
window.__PORTFOLIO_CONFIG__ = {
  DATA_BASE_URL: '',  /* Empty = use local files in public/data/ */
}
