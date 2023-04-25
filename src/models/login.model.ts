import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { UserToLogin } from '../types';

const userLogin = async (user: UserToLogin) => {
  const { username, password } = user;
  const [registeredUser] = await connection.execute<RowDataPacket[]>(
    'SELECT * FROM Trybesmith.users WHERE users.username = ? AND users.password = ?',
    [username, password],
  );
  console.log('********** RESULTADO DA QUERY: ', registeredUser);
  return registeredUser;
};

export default {
  userLogin,
};
