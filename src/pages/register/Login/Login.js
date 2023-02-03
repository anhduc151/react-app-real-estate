import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase/connect';
import { Paper ,
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  Link,
} from '@mui/material';
import '../Login/loginn.css'
import duma from '../../../assets/img/logo/logo.svg';
export default function Login() {
  const history = useNavigate();
  //Yup
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required('Bạn chưa nhập email hoặc số điện thoại.')
      .required('Username is required'),
    password: Yup.string().required('Password is required'),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  //log out
  const signOut = async () => {
    await signOut(auth);
  };
  //Onclick submit
  const onSubmit = async (data) => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        data.username,
        data.password,
      );
      history('/');
      

    } catch (e) { }
  };
 


  return (
    <div className="col-sm-12 row ">
      <div className="col-sm-6 row1 ">
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
        <Paper></Paper>
        <Paper elevation={4} className="Paper">
          <Box px={3} py={2}>
            <Typography
              className="row2__title"
              variant="h5"
              align="center"
              margin="dense"
            >
              ĐĂNG NHẬP
            </Typography>

            <Grid className="row2__form" spacing={1}>
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
                  // label="Password"
                  type="password"
                  fullWidth
                  placeholder="Mật khẩu"
                  variant="outlined"
                  // margin="dense"
                  {...register('password')}
                  error={errors.password ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.password?.message}
                </Typography>
              </Grid>
              {/* btn Đăng nhập */}
              <Button
                variant="contained"
                className="row2__btn"
                color="error"
                onClick={handleSubmit(onSubmit)}
              >
                Đăng nhập
              </Button>
              {/* link quen mk */}
              <Link className="row2__link" href="/">
                Quên mật khẩu
              </Link>
              <Typography className="row2__sha"></Typography>
              {/* btn   Tạo tài khoản mới */}

              <Button
                onClick={() => history('/signup')}
                variant="contained"
                className="row2__btn row2__btnnew"
                color="primary"
              >
                Tạo tài khoản
              </Button>
            </Grid>
          </Box>
        </Paper>
      </div>
    </div>
  );
}
