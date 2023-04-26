/* eslint-disable consistent-return */
const Admin = require('../../models/Staff/Admin');

class AdminController {
  // @desc     create admin
  // @route    POST /api/v1/admin/register
  // @access   Private
  static async Register(req, res) {
    const { name, email, password } = req.body;
    try {
      const adminExists = await Admin.findOne({ email });
      if (adminExists) { return res.status(200).json({ error: 'Admin already exists' }); }
      const admin = await Admin.create({ name, email, password });
      return res.status(201).json({ data: admin });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // @desc     login admin
  // @route    POST /api/v1/admin/login
  // @access   Private
  static async Login(req, res) {
    const { email, password } = req.body;
    try {
      // find user
      const user = await Admin.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      if (user && (await user.verifyPassword(password))) {
        return res.status(201).json({ data: user });
      }
      return res.status(400).json({ message: 'Invalid login credentials' });
    } catch (error) {
      res.json({
        status: 'failed',
        error: error.message,
      });
    }
  }

  // @desc     get all admin
  // @route    GET /api/v1/admin/
  // @access   Private
  static async GetAdmins(req, res) {
    try {
      return res.status(201).json('Retrieved successfully');
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // @desc     get single admin
  // @route    GET /api/v1/admin/:id
  // @access   Private
  static async GetAdmin(req, res) {
    try {
      return res.status(201).json('Retrieved successfully');
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // @desc     update admin
  // @route    PUT /api/v1/admin/:id
  // @access   Private
  static async UpdateAdmin(req, res) {
    try {
      return res.status(201).json('Updated successfully');
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // @desc     delete admin
  // @route    DELETE /api/v1/admin/:id
  // @access   Private
  static async DeleteAdmin(req, res) {
    try {
      return res.status(201).json('Deleted successfully');
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // @desc     suspend teacher
  // @route    PUT /api/v1/admin/suspend/teacher/:id
  // @access   Private
  static async AdminSuspendTeacher(req, res) {
    try {
      return res.status(201).json('Deleted successfully');
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // @desc     suspend teacher
  // @route    PUT /api/v1/admin/unsuspend/teacher/:id
  // @access   Private
  static async AdminUnsuspendTeacher(req, res) {
    try {
      return res.status(201).json('Deleted successfully');
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // @desc     withdraw teacher
  // @route    PUT /api/v1/admin/withdraw/teacher/:id
  // @access   Private
  static async AdminWithdrawTeacher(req, res) {
    try {
      return res.status(201).json('Deleted successfully');
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // @desc     unwithdraw teacher
  // @route    PUT /api/v1/admin/unwithdraw/teacher/:id
  // @access   Private
  static async AdminUnwithdrawTeacher(req, res) {
    try {
      return res.status(201).json('Deleted successfully');
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // @desc     publish results
  // @route    PUT /api/v1/admin/publish/exam/:id
  // @access   Private
  static async AdminPublishResults(req, res) {
    try {
      return res.status(201).json('Deleted successfully');
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // @desc     unpublish results
  // @route    PUT /api/v1/admin/unpublish/exam/:id
  // @access   Private
  static async AdminUnpublishResults(req, res) {
    try {
      return res.status(201).json('Deleted successfully');
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = AdminController;
