import os
from flask import Flask, redirect, render_template, session, request
from werkzeug.security import check_password_hash, generate_password_hash

# Configure application
app = Flask(__name__)

# Ensure templates are auto-reloaded
app.config["TEMPLATES_AUTO_RELOAD"] = True

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/sequencers")
def sequencers():
    return render_template("sequencers.html")

@app.route("/synths")
def synths():
    return render_template("synths.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/visualizer")
def visualizer():
    return render_template("visualizer.html")