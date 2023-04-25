import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { User } from '../types';

const postUser = async (user: User) => {
  const { username, vocation, level, password } = user;
  const [registeredInfo] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users(username, vocation, level, password) VALUES (?, ?, ?, ?);',
    [username, vocation, level, password],
  );
  return registeredInfo;
};

export default {
  postUser,
};
