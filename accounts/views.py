# views.py

from django.shortcuts import render, redirect
from .models import User

def signup(request):
    if request.method == 'POST':
        name = request.POST['name']
        email = request.POST['email']
        password = request.POST['password']
        confirm_password = request.POST['confirm_password']

        if password != confirm_password:
            # Passwords don't match, handle error
            pass

        # Save the user to the database
        user = User(name=name, email=email, password=password)
        user.save()

        # Redirect to a success page or login page
        return redirect('success_page')

    return render(request, 'signup.html')
