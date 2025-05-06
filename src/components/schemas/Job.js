/**
 * @swagger
 * components:
 *   schemas:
 *     Job:
 *       type: object
 *       required:
 *         - company
 *         - role
 *         - status
 *         - dateApplied
 *       properties:
 *         company:
 *           type: string
 *           description: The company name where the job application is made.
 *         role:
 *           type: string
 *           description: The job role being applied for.
 *         status:
 *           type: string
 *           description: The current status of the job application.
 *           enum:
 *             - Applied
 *             - Interview
 *             - Offer
 *             - Rejected
 *         dateApplied:
 *           type: string
 *           format: date
 *           description: The date when the job was applied.
 *         link:
 *           type: string
 *           description: The link to the job listing or job portal.
 *         notes:
 *           type: string
 *           description: Additional notes or details about the job application.
 */
