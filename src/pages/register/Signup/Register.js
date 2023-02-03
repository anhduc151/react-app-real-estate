import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../../firebase/connect';
import {
  Paper,
  Box,
  Grid,
  TextField,
  Typography,
  Button
} from '@mui/material';
import duma from '../../../assets/img/logo/logo.svg';

export default function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  // YUP: VALIDATION
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required('Bạn chưa nhập email hoặc số điện thoại.')
      .required('Username is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
    lastname: Yup.string()
      .required('Bạn chưa nhập Name.')
      .required('Username is required'),
    firstname: Yup.string()
      .required('Bạn chưa nhập Name.')
      .required('Username is required'),
  });
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    try {
      //Register
      const users = await createUserWithEmailAndPassword(
        auth,
        data.username,
        data.password,
      );
      //add display name cho user
      const updateName = () => {
        return updateProfile(auth.currentUser, {
          displayName: lastName + ' ' + firstName,
        });
      };
      updateName();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="col-sm-12 row">
      <div className="col-sm-6 row1">
      <img
          className="row1__logo"
          src={duma}
        />
        <Typography variant="h6">
          {' '}
          Batdongsan.com.vn là đơn vị đồng hành an tâm, uy tín và tiện lợi cùng nhà kinh doanh và tất cả mọi người.
        </Typography>
      </div>
      <div className="col-sm-6 row2">
        {/* {!status} { */}

        <Paper elevation={4} className="Paper">
          <Box px={3} py={2}>
            <Typography
              className="row2__title"
              variant="h5"
              align="center"
              margin="dense"
            >
              Tạo tài khoản
            </Typography>

            <Grid className="row2__form" spacing={1}>
              {/* Last name+First Name */}
              <Grid className="row2__lastfirst">
                <Grid xs={5} className="row2__input">
                  <TextField
                    required
                    id="lastname"
                    name="lastname"
                    fullWidth
                    placeholder="lastname"
                    variant="outlined"
                    // margin="dense"
                    {...register('lastname')}
                    error={errors.lastname ? true : false}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.name?.message}
                  </Typography>
                </Grid>
                <Grid xs={5} className="row2__input">
                  <TextField
                    required
                    id="firstname"
                    name="firstname"
                    fullWidth
                    placeholder="firstname"
                    variant="outlined"
                    {...register('firstname')}
                    error={errors.firstname ? true : false}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                  <Typography variant="inherit" color="textSecondary">
                    {errors.name?.message}
                  </Typography>
                </Grid>
              </Grid>
              {/* Usename - email -sdt  */}
              <Grid className="row2__input">
                <TextField
                  required
                  id="username"
                  name="username"
                  fullWidth
                  placeholder="Email hoặc số điện thoại"
                  variant="outlined"
                  {...register('username')}
                  error={errors.username ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.username?.message}
                </Typography>
              </Grid>
              {/* Passwword */}
              <Grid className="row2__input">
                <TextField
                  required
                  id="password"
                  name="password"
                  type="password"
                  fullWidth
                  placeholder="Mật khẩu"
                  variant="outlined"
                  {...register('password')}
                  error={errors.password ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.password?.message}
                </Typography>
              </Grid>
              {/* confirm */}
              <Grid className="row2__input">
                <TextField
                  required
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  fullWidth
                  placeholder="Xác nhận mật khẩu"
                  variant="outlined"
                  {...register('confirmPassword')}
                  error={errors.confirmPassword ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.password?.message}
                </Typography>
              </Grid>

              {/* btn Đăng nhập */}
              <Button
                variant="contained"
                className="row2__btn row2__btnnew"
                color="error"
                onClick={handleSubmit(onSubmit)}
              >
                Tạo tài khoản mới
              </Button>
              <Link style={{ textDecoration: 'none', margin: 'auto' }} to="/login" >
                {' '}
                Đăng nhập tại đây
              </Link>
                {/* <Button size="small" onClick={() => history('/login')}>
                Đăng nhập tại đây
                </Button> */}
              

              <Typography className="row2__sha"></Typography>
              {/* btn   Tạo tài khoản mới */}
            </Grid>
          </Box>
        </Paper>
      </div>
    </div>
  );
}
