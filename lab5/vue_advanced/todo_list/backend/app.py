from flask import Flask, request
from flask_cors import CORS
import sqlite3


app = Flask(__name__)
cors = CORS(app)
con = sqlite3.connect('tasks.db', check_same_thread=False)


def task_to_model(task_raw):
    task = {}
    task['task_id'] = task_raw[0]
    task['task_name'] = task_raw[1]
    task['task_deadline'] = task_raw[2]
    task['task_type'] = task_raw[3]
    task['task_description'] = task_raw[4]
    task['task_done'] = task_raw[5]

    return task


@app.route('/api/get_tasks', methods=['GET'])
def get_tasks():
    cur = con.cursor()
    cur.execute('SELECT * FROM tasks')
    tasks_raw = cur.fetchall()
    tasks_json = []
    for task_raw in tasks_raw:
        tasks_json.append(task_to_model(task_raw))
    cur.execute('SELECT MAX(task_id) FROM tasks')
    max_id = cur.fetchone()[0]
    con.commit()
    if max_id is None:
        max_id = -1
    cur.close()
    return {"tasks": tasks_json, "max_id": max_id + 1}


@app.route('/api/delete_task', methods=['POST'])
def delete_task():
    id = int(request.json['task_id'])
    cur = con.cursor()
    try:
        cur.execute("DELETE FROM tasks WHERE task_id=?", (id, ))
        con.commit()
        return {"msg": "Success"}
    except Exception as e:
        return {"msg": "Failure"}
    finally:
        cur.close()


@app.route('/api/add_task', methods=['POST'])
def add_task():
    data = request.json
    cur = con.cursor()
    cur.execute("INSERT INTO tasks VALUES(?, ?, ?, ?, ?, ?)", [
                data['task_id'], data['task_name'], data['task_deadline'],
                data['task_type'], data['task_description'], data['task_done']
                ])
    con.commit()
    cur.close()
    return {"msg": "Success"}


@app.route('/api/redo_task', methods=['POST'])
def redo_task():
    id = int(request.json['task_id'])
    cur = con.cursor()
    cur.execute("SELECT task_done FROM tasks WHERE task_id=?", (id, ))
    data = cur.fetchall()
    if len(data) == 0:
        return {"msg": "Failure"}
    task_done = int(data[0][0])
    cur.execute("UPDATE tasks SET task_done=? WHERE task_id=?", (task_done ^ 1, id))
    con.commit()

    return {"msg": "Success"}


if __name__ == "__main__":
    app.run('0.0.0.0', 31337)
