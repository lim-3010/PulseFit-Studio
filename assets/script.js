
// script.js - small JS for mobile nav and modal
document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('mainNav');
  if(toggle){
    toggle.addEventListener('click', ()=>{
      if(nav.style.display === 'flex') nav.style.display = 'none';
      else nav.style.display = 'flex';
    });
  }
  // Form modal for register forms
  document.querySelectorAll('.registerForm').forEach(form=>{
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = this.querySelector('input[name="name"]')?.value || 'Friend';
      const modal = document.getElementById('successModal');
      if(modal){
        modal.querySelector('.modal-name').textContent = name;
        modal.style.display = 'block';
      }
      this.reset();
    });
  });
  // Modal close buttons
  document.querySelectorAll('.modal-close').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      btn.closest('.modal').style.display = 'none';
    });
  });
});
