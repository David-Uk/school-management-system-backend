const express = require('express');
const AdminController = require('../../controller/staff/AdminController');

const adminRouter = express.Router();

adminRouter.post('/register', AdminController.Register);
adminRouter.post('/login', AdminController.Login);
adminRouter.get('/', AdminController.GetAdmins);
adminRouter.get('/:id', AdminController.GetAdmin);
adminRouter.put('/:id', AdminController.UpdateAdmin);
adminRouter.delete('/:id', AdminController.DeleteAdmin);
adminRouter.put('/suspend/teacher/:id', AdminController.AdminSuspendTeacher);
adminRouter.put('/unsuspend/teacher/:id', AdminController.AdminUnsuspendTeacher);
adminRouter.put('/withdraw/teacher/:id', AdminController.AdminWithdrawTeacher);
adminRouter.put('/unwithdraw/teacher/:id', AdminController.AdminUnwithdrawTeacher);
adminRouter.put('/publish/exam/:id', AdminController.AdminPublishResults);
adminRouter.put('/unpublish/exam/:id', AdminController.AdminUnpublishResults);

module.exports = adminRouter;
