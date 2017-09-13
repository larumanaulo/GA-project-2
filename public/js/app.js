"use strict";$(function(){function e(){$(".ingredients select").select2("destroy");var e=r.clone();r.parent().append(e);var a=e.index();e.find("input, select").each(function(e,i){var t=$(i).attr("name").replace(/[0-9]+/,a);$(i).attr("name",t)}),$(".ingredients select").select2({tags:!0})}function a(){m.toggleClass("is-active"),g.toggleClass("is-active")}function i(){o.slideUp(500),c.delay(500).slideDown(500)}function t(){var e=n.clone();n.parent().append(e)}var r=$(".repeater"),n=$(".repeate"),l=$(".addIng"),s=$(".addStep"),c=$(".form-register"),o=$(".form-login"),d=$(".home-btn"),m=$(".menu"),g=$(".navbar-menu");$("form#register").validate({rules:{email:{required:!0,email:!0,remote:"/checkemail"}},messages:{email:{required:"Please enter a valid email address",email:"Please enter a valid email address",remote:"This email is already registered"}}}),$("form").not("#register").validate(),console.log($("form#register").find("[name=email]").rules()),$(".ingredients select").select2({tags:!0}),l.on("click",e),s.on("click",t),d.on("click",i),m.on("click",a)});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyIkIiwiYWRkSW5ncmVkaWVudCIsInNlbGVjdDIiLCIkbmV3SW5ncmVkaWVudCIsIiRyZXBlYXRlciIsImNsb25lIiwicGFyZW50IiwiZWFjaCIsImkiLCJpbnB1dCIsIm5hbWUiLCJmaW5kIiwiYXR0ciIsImluZGV4IiwibmV3TmFtZSIsInJlcGxhY2UiLCJ0YWdzIiwiYnVyZ2VyQnRuIiwiJG1lbnVCdG4iLCJ0b2dnbGVDbGFzcyIsIiRsb2dpbiIsInNsaWRlVXAiLCIkcmVnIiwiZGVsYXkiLCJzbGlkZURvd24iLCIkbmV3U3RlcCIsIiRyZXBlYXRlIiwiYXBwZW5kIiwiJGFkZEJ0biIsIiRhZGRTdGVwIiwiJGhvbWVCdG4iLCJ2YWxpZGF0ZSIsInJ1bGVzIiwicmVxdWlyZWQiLCJlbWFpbCIsInJlbW90ZSIsIm1lc3NhZ2VzIiwibm90IiwibG9nIiwib24iLCJyZWdTaG93Il0sIm1hcHBpbmdzIjoiYUFBQUEsRUFBRSxXQTBCQSxTQUFTQyxJQUFURCxFQUFBLHVCQUF3QkUsUUFBQSxXQUN0QkYsSUFBRUcsRUFBRkMsRUFBaUNDLFFBQ2pDRCxFQUFNRCxTQUFBQSxPQUFpQkMsR0FDdkJBLElBQUFBLEVBQVVFLEVBQWdCSCxRQUMxQkEsRUFBY0EsS0FBQUEsaUJBQWRJLEtBQUEsU0FBQUMsRUFBQUMsR0FDQU4sSUFDUU8sRUFET0MsRUFBQUEsR0FBS0MsS0FBQSxRQUNJQSxRQUFLLFNBQTNCQyxHQUNBYixFQUFBUyxHQUFNSyxLQUFVSixPQUFLSyxLQUV0QmYsRUFKRCx1QkFBQUUsU0FBQWMsTUFBQSxJQVFGLFNBQVNDLElBQVRDLEVBQVNELFlBQVcsYUFDbEJDLEVBQVNDLFlBQVksYUFPckJDLFNBQU9DLElBQ1BDLEVBQUtDLFFBQUwsS0FDREQsRUFBQUMsTUFBQSxLQUFBQyxVQUFBLEtBR0MsU0FBTUMsSUFDTkMsSUFBQUEsRUFBQUEsRUFBeUJELFFBQzFCQyxFQUFBcEIsU0FBQXFCLE9BQUFGLEdBckRELElBQU1yQixFQUFZSixFQUFFLGFBRHBCMEIsRUFBTTFCLEVBQUEsWUFDQUksRUFBWUosRUFBRSxXQUNkMEIsRUFBYTFCLEVBQUEsWUFDYjRCLEVBQUFBLEVBQVU1QixrQkFDVjZCLEVBQVc3QixFQUFFLGVBQ2JzQixFQUFTdEIsRUFBQSxhQUNUb0IsRUFBV3BCLEVBQUEsU0FDWDhCLEVBQWE5QixFQUFBLGdCQUtuQkEsRUFBRSxpQkFBaUIrQixVQUFqQkMsT0FDQUEsT0FBT0MsVUFBQSxFQUFBQyxPQUFBLEVBQUFDLE9BQUEsZ0JBQUFDLFVBR1BBLE9BQVVILFNBQUEscUNBQUFDLE1BQUEscUNBQUFDLE9BQUEsdUNBS1puQyxFQUFFLFFBQVFxQyxJQUFJLGFBQWFOLFdBQTNCL0IsUUFBQXNDLElBQVVELEVBQUksaUJBQWFOLEtBQTNCLGdCQUFBQyxTQUdBaEMsRUFBRSx1QkFBdUJFLFNBQVVjLE1BQU0sSUFpQ3pDYSxFQUFBQSxHQUFBLFFBQUE1QixHQUNBNkIsRUFBU1MsR0FBRyxRQUFTQyxHQUNyQnRCLEVBQVNxQixHQUFHLFFBQVN0QixHQTNEdkJDLEVBQUFxQixHQUFBLFFBQUF0QiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKCgpID0+IHtcbiAgY29uc3QgJHJlcGVhdGVyID0gJCgnLnJlcGVhdGVyJyk7XG4gIGNvbnN0ICRyZXBlYXRlID0gJCgnLnJlcGVhdGUnKTtcbiAgY29uc3QgJGFkZEJ0biA9ICQoJy5hZGRJbmcnKTtcbiAgY29uc3QgJGFkZFN0ZXAgPSAkKCcuYWRkU3RlcCcpO1xuICBjb25zdCAkcmVnID0gJCgnLmZvcm0tcmVnaXN0ZXInKTtcbiAgY29uc3QgJGxvZ2luID0gJCgnLmZvcm0tbG9naW4nKTtcbiAgY29uc3QgJGhvbWVCdG4gPSAkKCcuaG9tZS1idG4nKTtcbiAgY29uc3QgJG1lbnVCdG4gPSAkKCcubWVudScpO1xuICBjb25zdCAkbmF2TWVudSA9ICQoJy5uYXZiYXItbWVudScpO1xuXG5cbiAgJCgnZm9ybSNyZWdpc3RlcicpLnZhbGlkYXRlKHtcbiAgICBydWxlczoge1xuICAgICAgZW1haWw6IHsgcmVxdWlyZWQ6IHRydWUsIGVtYWlsOiB0cnVlLCByZW1vdGU6ICcvY2hlY2tlbWFpbCcgfVxuICAgIH0sXG4gICAgbWVzc2FnZXM6IHtcbiAgICAgIGVtYWlsOiB7IHJlcXVpcmVkOiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzcycsIGVtYWlsOiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzcycsIHJlbW90ZTogJ1RoaXMgZW1haWwgaXMgYWxyZWFkeSByZWdpc3RlcmVkJyB9XG4gICAgfVxuICB9KTtcblxuICAkKCdmb3JtJykubm90KCcjcmVnaXN0ZXInKS52YWxpZGF0ZSgpO1xuICBjb25zb2xlLmxvZygkKCdmb3JtI3JlZ2lzdGVyJykuZmluZCgnW25hbWU9ZW1haWxdJykucnVsZXMoKSk7XG5cbiAgJCgnLmluZ3JlZGllbnRzIHNlbGVjdCcpLnNlbGVjdDIoeyB0YWdzOiB0cnVlIH0pO1xuXG4gIGZ1bmN0aW9uIGFkZEluZ3JlZGllbnQoKXtcbiAgICAkKCcuaW5ncmVkaWVudHMgc2VsZWN0Jykuc2VsZWN0MignZGVzdHJveScpO1xuICAgIGNvbnN0ICRuZXdJbmdyZWRpZW50ID0gJHJlcGVhdGVyLmNsb25lKCk7XG4gICAgJHJlcGVhdGVyLnBhcmVudCgpLmFwcGVuZCgkbmV3SW5ncmVkaWVudCk7XG4gICAgY29uc3QgaW5kZXggPSAkbmV3SW5ncmVkaWVudC5pbmRleCgpO1xuICAgICRuZXdJbmdyZWRpZW50LmZpbmQoJ2lucHV0LCBzZWxlY3QnKS5lYWNoKChpLCBpbnB1dCkgPT4ge1xuICAgICAgY29uc3QgbmFtZSA9ICQoaW5wdXQpLmF0dHIoJ25hbWUnKTtcbiAgICAgIGNvbnN0IG5ld05hbWUgPSBuYW1lLnJlcGxhY2UoL1swLTldKy8sIGluZGV4KTtcbiAgICAgICQoaW5wdXQpLmF0dHIoJ25hbWUnLCBuZXdOYW1lKTtcbiAgICB9KTtcbiAgICAkKCcuaW5ncmVkaWVudHMgc2VsZWN0Jykuc2VsZWN0Mih7IHRhZ3M6IHRydWUgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBidXJnZXJCdG4oKXtcbiAgICAkbWVudUJ0bi50b2dnbGVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgJG5hdk1lbnUudG9nZ2xlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICB9XG5cblxuXG4gIGZ1bmN0aW9uIHJlZ1Nob3coKXtcbiAgICAkbG9naW4uc2xpZGVVcCg1MDApO1xuICAgICRyZWcuZGVsYXkoNTAwKS5zbGlkZURvd24oNTAwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFN0ZXAoKXtcbiAgICBjb25zdCAkbmV3U3RlcCA9ICRyZXBlYXRlLmNsb25lKCk7XG4gICAgJHJlcGVhdGUucGFyZW50KCkuYXBwZW5kKCRuZXdTdGVwKTtcbiAgfVxuXG4gICRhZGRCdG4ub24oJ2NsaWNrJywgYWRkSW5ncmVkaWVudCk7XG4gICRhZGRTdGVwLm9uKCdjbGljaycsIGFkZFN0ZXApO1xuICAkaG9tZUJ0bi5vbignY2xpY2snLCByZWdTaG93KTtcbiAgJG1lbnVCdG4ub24oJ2NsaWNrJywgYnVyZ2VyQnRuKTtcblxuXG59KTtcbiJdfQ==
