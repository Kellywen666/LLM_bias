from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

# 定义一个路由，展示前端页面
@app.route('/')
def index():
    return render_template('index.html')  # 前端页面index.html

# 定义API路由，接收用户输入并返回固定输出
@app.route('/get_response', methods=['POST'])
def get_response():
    # 获取用户输入的prompt
    user_input = request.json.get('prompt', '')
    # 设定固定的输出内容（可以设置多个预定义的输出）
    fixed_output = ("hi.")
    # 返回固定的输出结果
    return jsonify({'output': fixed_output})

if __name__ == '__main__':
    app.run(debug=True)
