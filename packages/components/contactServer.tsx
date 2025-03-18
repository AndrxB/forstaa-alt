import mysql from 'mysql2';
import { promisePool } from '../const/serverpool'

type InsertProps = {
    FirstName: string
    SecondName: string
    email: string
}

export async function insertPerson({FirstName, SecondName, email} : InsertProps) {
  try {
    const q = 'INSERT INTO Person(firstname, secondName, email) VALUEs (?, ?, ?)'

    const [result] = await promisePool.execute(q, [FirstName, SecondName, email])
    return { success: true, message: 'Data inserted successfully', result };
  } catch (error) {
    console.error('Database query error:', error)
    return new Response('Error fetching data from database', { status: 500 });
  }

}

type getProps = {
  table: string
}

export async function get({table} : getProps) {
  try {
    const [rows] = await promisePool.query('SELECT * FROM ?', [table]);
    return new Response(JSON.stringify(rows), {
      status: 200,
    });
  } catch (error) {
    console.error('Database query error:', error);
    return new Response('Error fetching data from database', { status: 500 });
  }
}

type insertBlogProps = {
  pID: number
  blog: JSON
}

export async function insertBlog({pID, blog} : insertBlogProps) {
  try {
    const [rows] = await promisePool.query('INSERT INTO Blog(pID, blog) VALUES (?, ?)', [pID, blog]);
    return new Response(JSON.stringify(rows), {
      status: 200,
    });
  } catch (error) {
    console.error('Database query error:', error);
    return new Response('Error fetching data from database', { status: 500 });
  }
}