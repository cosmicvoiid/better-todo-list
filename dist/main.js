(()=>{"use strict";class e{constructor(e,t,o){this.projectName=e,this.todo_list=t,this.selected=!1}}const t=(()=>{let t=JSON.parse(localStorage.getItem("task.projects"))||[];function o(e){localStorage.setItem("task.projects",JSON.stringify(e))}return{makeProject:function(c,n){let d=new e(c,n);t.push(d),console.log({projectList:t}),o(t)},changeName:function(e,c){t[c].projectName=e,o(t)},removeProject:function(e){t.splice(e,1),o(t)},select:function(e,c){t[e].selected=c,o(t)},saveProject:o,projectList:t}})();class o{constructor(e,t,o,c,n){this.todoName=e,this.description=t,this.date=o,this.priority=c,this.completed=!1}}const c=(()=>{let e=[];return{isSelected:function(){let e=t.projectList;for(let t=0;t<e.length;t++)if(!0===e[t].selected)return t},makeTodo:function(t,c,n,d){let r=new o(t,c,n,d);return e.push(r),r},sortList:function(e){let t=[];for(let o=0;o<e.length;o++)"High"===e[o].priority&&t.push(e[o]);for(let o=0;o<e.length;o++)"Medium"===e[o].priority&&t.push(e[o]);for(let o=0;o<e.length;o++)"Low"===e[o].priority&&t.push(e[o]);return t}}})(),n=(()=>{function e(){const e=document.querySelector(".modal"),t=document.querySelector(".modal-overlay");e.classList.toggle("closed"),t.classList.toggle("closed")}function o(){document.querySelector("#todo-btn").classList.add("closed")}function n(){const o=document.querySelector("#todo-name"),n=document.querySelector("#todo-description"),d=document.querySelector("#todo-date"),l=document.querySelector("#priority");!function(){const e=document.querySelector("#todo-name"),o=document.querySelector("#todo-description"),n=document.querySelector("#todo-date").value,d=document.querySelector("#priority");let l=c.makeTodo(e.value,o.value,n,d.value),s=c.isSelected();t.projectList[s].todo_list.push(l),t.projectList[s].todo_list=c.sortList(t.projectList[s].todo_list),t.saveProject(t.projectList),console.log(t.projectList[s]),r()}(),o.value="",n.value="",d.value="",l.value="Low",e()}const d=document.querySelector("#modal-form");function r(){let e=c.isSelected(),o=t.projectList[e];const n=document.querySelector("#content"),d=document.createElement("h1");d.setAttribute("id","content-title"),n.appendChild(d),l();const r=t.projectList[c.isSelected()].projectName;d.textContent=r,n.appendChild(d),console.log(o.todo_list);for(let e=0;e<o.todo_list.length;e++)s(o.todo_list[e],e),console.log("test2")}function l(){const e=document.querySelector("#content"),t=document.querySelector("#content-title"),o=document.querySelectorAll(".todo-container");for(let t=0;t<o.length;t++)e.removeChild(o[t]);e.removeChild(t)}function s(o,s){const i=document.querySelector("#content"),a=document.createElement("h1"),u=document.createElement("div"),p=document.createElement("input"),m=document.createElement("label"),v=document.createElement("span"),L=document.createElement("div"),h=document.createElement("div"),y=document.createElement("h3"),j=document.createElement("div"),f=document.createElement("input"),S=document.createElement("div"),g=document.createElement("span"),C=document.createElement("span");C.classList.add("material-icons"),g.classList.add("material-icons"),C.textContent="edit",g.textContent="delete";const E=t.projectList[c.isSelected()].projectName;a.textContent=E,y.textContent=o.todoName,j.textContent=o.description,f.setAttribute("type","date"),f.value=o.date,f.classList.add("todo-date-div"),p.setAttribute("type","checkbox"),h.classList.add("todo-text"),u.classList.add("todo-container"),p.classList.add("custom-checkbox"),C.classList.add("btn"),g.classList.add("btn"),L.classList.add("left-container"),S.classList.add("right-container"),C.addEventListener("click",(()=>{!function(o){let s=t.projectList[c.isSelected()].todo_list;const i=document.querySelector("#todo-name"),a=document.querySelector("#todo-description"),u=document.querySelector("#todo-date"),p=document.querySelector("#priority");i.value=s[o].todoName,a.value=s[o].description,u.value=s[o].date,p.value=s[o].priority,e(),d.removeEventListener("submit",n),d.addEventListener("submit",(function m(){s[o].todoName=i.value,s[o].description=a.value,s[o].date=u.value,s[o].priority=p.value;let v=c.isSelected();t.projectList[v].todo_list=c.sortList(t.projectList[v].todo_list),l(),r(),e(),i.value="",a.value="",u.value="",p.value="Low",t.saveProject(t.projectList),this.removeEventListener("submit",m),d.addEventListener("submit",n)}))}(s)})),g.addEventListener("click",(()=>{console.log(s),function(e){t.projectList[c.isSelected()].todo_list.splice(e,1),t.saveProject(t.projectList),r()}(s)})),f.addEventListener("change",(()=>{o.date=f.value,t.saveProject(t.projectList)})),p.addEventListener("click",(()=>{o.completed=p.checked,t.saveProject(t.projectList)})),p.checked=o.completed,"High"===o.priority&&(v.style.cssText="border-color: red; --checkColor: red"),"Medium"===o.priority&&(v.style.cssText="border-color: orange; --checkColor: orange"),"Low"===o.priority&&(v.style.cssText="border-color: green; --checkColor: green"),m.appendChild(p),m.appendChild(v),v.classList.add("custom-checkbox"),h.appendChild(y),h.appendChild(j),L.appendChild(m),L.appendChild(h),S.appendChild(f),S.appendChild(C),S.appendChild(g),u.appendChild(L),u.appendChild(S),i.appendChild(u)}return d.addEventListener("submit",(e=>{e.preventDefault()})),d.addEventListener("submit",n),{addTodoButton:function(){if(void 0!==c.isSelected()){const t=document.querySelector("#todo-btn");t.classList.remove("closed"),document.querySelector("#modal-exit").addEventListener("click",e),t.addEventListener("click",e)}else o()},removeTodoButton:o,displayTodo:r,clearTodo:l}})(),d=(()=>{const e=document.querySelector("#projects-container");function o(o,r){const s=document.createElement("div"),i=document.createElement("div"),a=document.createElement("span"),u=document.createElement("span");s.classList.add("project"),i.classList.add("project-title"),a.classList.add("btn"),a.classList.add("material-icons"),u.classList.add("material-icons"),u.classList.add("btn"),a.textContent="edit",u.textContent="delete",i.addEventListener("click",(e=>{e.stopPropagation(),l(),t.select(r,!0),d()})),a.addEventListener("click",(e=>{e.stopPropagation(),function(e){const o=document.querySelectorAll(".project"),c=document.querySelectorAll(".project-title"),n=document.createElement("input");n.classList.add("edit-text"),n.classList.add("project-name"),n.setAttribute("type","text"),n.setAttribute("maxlength","10"),n.value=t.projectList[e].projectName,o[e].removeChild(c[e]),o[e].appendChild(n),n.addEventListener("keypress",(o=>{"Enter"===o.key&&(console.log("yes"),t.changeName(n.value,e),d())}))}(r)})),u.addEventListener("click",(o=>{o.stopPropagation(),function(o){const r=document.querySelectorAll(".project");e.removeChild(r[o]),t.removeProject(o),d(),console.log(c.isSelected()),n.clearTodo(),void 0===c.isSelected()&&n.removeTodoButton()}(r)})),i.textContent=o,s.appendChild(i),s.appendChild(a),s.appendChild(u),e.appendChild(s)}function d(){!function(){for(;e.firstChild;)e.removeChild(e.firstChild)}();let c=0,d=t.projectList;for(console.log(d);c<d.length;c++)o(d[c].projectName,c),!0===d[c].selected&&(r(c),n.addTodoButton(),n.displayTodo())}function r(e){l(),t.select(e,!0),document.querySelectorAll(".project-title")[e].style.cssText="font-weight: bold"}function l(){for(let e=0;e<t.projectList.length;e++)t.select(e,!1)}return document.querySelector("#add-project").addEventListener("submit",(e=>{e.preventDefault();const o=document.querySelector(".project-name");var c;c=o.value,t.makeProject(c,[]),d(),o.value=""})),{addProject:o,render:d}})();console.log("test"),d.render()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iZXR0ZXItdG9kby1saXN0Ly4vc3JjL3Byb2plY3QtbG9naWMuanMiLCJ3ZWJwYWNrOi8vYmV0dGVyLXRvZG8tbGlzdC8uL3NyYy90b2RvLWxvZ2ljLmpzIiwid2VicGFjazovL2JldHRlci10b2RvLWxpc3QvLi9zcmMvdG9kby1kb20uanMiLCJ3ZWJwYWNrOi8vYmV0dGVyLXRvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LWRvbS5qcyIsIndlYnBhY2s6Ly9iZXR0ZXItdG9kby1saXN0Ly4vc3JjL3Rlc3QuanMiLCJ3ZWJwYWNrOi8vYmV0dGVyLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJQcm9qZWN0IiwiY29uc3RydWN0b3IiLCJwcm9qZWN0TmFtZSIsInRvZG9fbGlzdCIsInNlbGVjdGVkIiwidGhpcyIsInByb2plY3RMaXN0IiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNhdmVQcm9qZWN0IiwicHJvamVjdCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJtYWtlUHJvamVjdCIsIm9iaiIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiY2hhbmdlTmFtZSIsIm5ld05hbWUiLCJpbmRleCIsInJlbW92ZVByb2plY3QiLCJzcGxpY2UiLCJzZWxlY3QiLCJib29sIiwiVG9kbyIsInRvZG9OYW1lIiwiZGVzY3JpcHRpb24iLCJkYXRlIiwicHJpb3JpdHkiLCJjb21wbGV0ZWQiLCJ0b2RvTGlzdCIsImlzU2VsZWN0ZWQiLCJsaXN0IiwiaSIsImxlbmd0aCIsIm1ha2VUb2RvIiwic29ydExpc3QiLCJuZXdMaXN0IiwidG9nZ2xlTW9kYWwiLCJtb2RhbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1vZGFsT3ZlcmxheSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInJlbW92ZVRvZG9CdXR0b24iLCJhZGQiLCJtb2RhbEZsb3ciLCJ0b2RvRGVzY3JpcHRpb24iLCJ0b2RvRGF0ZSIsInRvZG9Qcmlvcml0eSIsInZhbHVlIiwidG9kbyIsImRpc3BsYXlUb2RvIiwiZm9ybVN1Ym1pdCIsIm1vZGFsRm9ybSIsImNvbnRlbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJjbGVhclRvZG8iLCJwcm9qZWN0VGl0bGUiLCJ0ZXh0Q29udGVudCIsIm1ha2VUb2RvVGFnIiwidG9kb0NvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZW1vdmVDaGlsZCIsImNoZWNrIiwiY2hlY2tMYWJlbCIsImNoZWNrU3BhbiIsImxlZnRDb250YWluZXIiLCJ0b2RvVGV4dCIsInJpZ2h0Q29udGFpbmVyIiwiZGVsIiwiZWRpdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidG9kb0VkaXRGb3JtIiwiZWRpdFRvZG8iLCJkZWxldGVUb2RvIiwiY2hlY2tlZCIsInN0eWxlIiwiY3NzVGV4dCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFkZFRvZG9CdXR0b24iLCJ1bmRlZmluZWQiLCJ0b2RvQnV0dG9uIiwicmVtb3ZlIiwicHJvamVjdENvbnRhaW5lciIsImFkZFByb2plY3QiLCJpbnB1dE5hbWUiLCJzdG9wUHJvcGFnYXRpb24iLCJkZXNlbGVjdFByb2plY3QiLCJyZW5kZXIiLCJlZGl0VGV4dCIsImtleSIsImVkaXRQcm9qZWN0IiwiZGVsZXRlUHJvamVjdCIsImZpcnN0Q2hpbGQiLCJjbGVhclByb2plY3QiLCJzZWxlY3RQcm9qZWN0IiwicHJvamVjdFRleHQiXSwibWFwcGluZ3MiOiJtQkFBQSxNQUFNQSxFQUNMQyxZQUFZQyxFQUFhQyxFQUFXQyxHQUNuQ0MsS0FBS0gsWUFBY0EsRUFDbkJHLEtBQUtGLFVBQVlBLEVBQ2pCRSxLQUFLRCxVQUFXLEdBSWxCLE1BdUNBLEVBdkNxQixNQUNwQixJQUFJRSxFQUFjQyxLQUFLQyxNQUFNQyxhQUFhQyxRQUFRLG1CQUFxQixHQUV2RSxTQUFTQyxFQUFZQyxHQUNwQkgsYUFBYUksUUFBUSxnQkFBaUJOLEtBQUtPLFVBQVVGLElBeUJ0RCxNQUFPLENBQ05HLFlBdkJELFNBQXFCYixFQUFhQyxHQUNqQyxJQUFJYSxFQUFNLElBQUloQixFQUFRRSxFQUFhQyxHQUNuQ0csRUFBWVcsS0FBS0QsR0FDakJFLFFBQVFDLElBQUksQ0FBRWIsZ0JBQ2RLLEVBQVlMLElBb0JaYyxXQVpELFNBQW9CQyxFQUFTQyxHQUM1QmhCLEVBQVlnQixHQUFPcEIsWUFBY21CLEVBQ2pDVixFQUFZTCxJQVdaaUIsY0FsQkQsU0FBdUJELEdBQ3RCaEIsRUFBWWtCLE9BQU9GLEVBQU8sR0FDMUJYLEVBQVlMLElBaUJabUIsT0FURCxTQUFnQkgsRUFBT0ksR0FDdEJwQixFQUFZZ0IsR0FBT2xCLFNBQVdzQixFQUM5QmYsRUFBWUwsSUFRWkssY0FDQUwsZ0JBbkNtQixHQ05yQixNQUFNcUIsRUFDTDFCLFlBQVkyQixFQUFVQyxFQUFhQyxFQUFNQyxFQUFVQyxHQUNsRDNCLEtBQUt1QixTQUFXQSxFQUNoQnZCLEtBQUt3QixZQUFjQSxFQUNuQnhCLEtBQUt5QixLQUFPQSxFQUNaekIsS0FBSzBCLFNBQVdBLEVBQ2hCMUIsS0FBSzJCLFdBQVksR0FJbkIsTUF3Q0EsRUF4Q2tCLE1BQ2pCLElBQUlDLEVBQVcsR0FvQ2YsTUFBTyxDQUFFQyxXQVBULFdBQ0MsSUFBSUMsRUFBTyxjQUNYLElBQUssSUFBSUMsRUFBSSxFQUFHQSxFQUFJRCxFQUFLRSxPQUFRRCxJQUNoQyxJQUF5QixJQUFyQkQsRUFBS0MsR0FBR2hDLFNBQW1CLE9BQU9nQyxHQUluQkUsU0FsQ3JCLFNBQWtCVixFQUFVQyxFQUFhQyxFQUFNQyxHQUM5QyxJQUFJZixFQUFNLElBQUlXLEVBQUtDLEVBQVVDLEVBQWFDLEVBQU1DLEdBRWhELE9BREFFLEVBQVNoQixLQUFLRCxHQUNQQSxHQStCdUJ1QixTQTVCL0IsU0FBa0JKLEdBQ2pCLElBQUlLLEVBQVUsR0FDZCxJQUFLLElBQUlKLEVBQUksRUFBR0EsRUFBSUQsRUFBS0UsT0FBUUQsSUFDUCxTQUFyQkQsRUFBS0MsR0FBR0wsVUFDWFMsRUFBUXZCLEtBQUtrQixFQUFLQyxJQUdwQixJQUFLLElBQUlBLEVBQUksRUFBR0EsRUFBSUQsRUFBS0UsT0FBUUQsSUFDUCxXQUFyQkQsRUFBS0MsR0FBR0wsVUFDWFMsRUFBUXZCLEtBQUtrQixFQUFLQyxJQUdwQixJQUFLLElBQUlBLEVBQUksRUFBR0EsRUFBSUQsRUFBS0UsT0FBUUQsSUFDUCxRQUFyQkQsRUFBS0MsR0FBR0wsVUFDWFMsRUFBUXZCLEtBQUtrQixFQUFLQyxJQUlwQixPQUFPSSxLQTNCUyxHQ3FPbEIsRUE5T2dCLE1BYWYsU0FBU0MsSUFDUixNQUFNQyxFQUFRQyxTQUFTQyxjQUFjLFVBQy9CQyxFQUFlRixTQUFTQyxjQUFjLGtCQUU1Q0YsRUFBTUksVUFBVUMsT0FBTyxVQUN2QkYsRUFBYUMsVUFBVUMsT0FBTyxVQUcvQixTQUFTQyxJQUNXTCxTQUFTQyxjQUFjLGFBQy9CRSxVQUFVRyxJQUFJLFVBRzFCLFNBQVNDLElBQ1IsTUFBTXRCLEVBQVdlLFNBQVNDLGNBQWMsY0FDbENPLEVBQWtCUixTQUFTQyxjQUFjLHFCQUN6Q1EsRUFBV1QsU0FBU0MsY0FBYyxjQUNsQ1MsRUFBZVYsU0FBU0MsY0FBYyxjQWU3QyxXQUNDLE1BQU1oQixFQUFXZSxTQUFTQyxjQUFjLGNBQ2xDTyxFQUFrQlIsU0FBU0MsY0FBYyxxQkFDekNRLEVBQVdULFNBQVNDLGNBQWMsY0FBY1UsTUFDaERELEVBQWVWLFNBQVNDLGNBQWMsYUFFNUMsSUFBSVcsRUFBTyxXQUNWM0IsRUFBUzBCLE1BQ1RILEVBQWdCRyxNQUNoQkYsRUFDQUMsRUFBYUMsT0FHVmhDLEVBQVEsZUFDWixjQUF5QkEsR0FBT25CLFVBQVVjLEtBQUtzQyxHQUMvQyxjQUF5QmpDLEdBQU9uQixVQUFZLFdBQzNDLGNBQXlCbUIsR0FBT25CLFdBRWpDLGNBQXlCLGVBQ3pCZSxRQUFRQyxJQUFJLGNBQXlCRyxJQUNyQ2tDLElBbENBQyxHQUNBN0IsRUFBUzBCLE1BQVEsR0FDakJILEVBQWdCRyxNQUFRLEdBQ3hCRixFQUFTRSxNQUFRLEdBQ2pCRCxFQUFhQyxNQUFRLE1BQ3JCYixJQUdELE1BQU1pQixFQUFZZixTQUFTQyxjQUFjLGVBNkJ6QyxTQUFTWSxJQUNSLElBQUlsQyxFQUFRLGVBQ1JhLEVBQU8sY0FBeUJiLEdBQ3BDLE1BQU1xQyxFQUFVaEIsU0FBU0MsY0FBYyxZQUNqQzFDLEVBQWN5QyxTQUFTaUIsY0FBYyxNQUMzQzFELEVBQVkyRCxhQUFhLEtBQU0saUJBQy9CRixFQUFRRyxZQUFZNUQsR0FDcEI2RCxJQUNBLE1BQU1DLEVBQ0wsY0FBeUIsZ0JBQXdCOUQsWUFDbERBLEVBQVkrRCxZQUFjRCxFQUMxQkwsRUFBUUcsWUFBWTVELEdBQ3BCZ0IsUUFBUUMsSUFBSWdCLEVBQUtoQyxXQUNqQixJQUFLLElBQUlpQyxFQUFJLEVBQUdBLEVBQUlELEVBQUtoQyxVQUFVa0MsT0FBUUQsSUFDMUM4QixFQUFZL0IsRUFBS2hDLFVBQVVpQyxHQUFJQSxHQUMvQmxCLFFBQVFDLElBQUksU0FJZCxTQUFTNEMsSUFDUixNQUFNSixFQUFVaEIsU0FBU0MsY0FBYyxZQUNqQ29CLEVBQWVyQixTQUFTQyxjQUFjLGtCQUN0Q3VCLEVBQWdCeEIsU0FBU3lCLGlCQUFpQixtQkFDaEQsSUFBSyxJQUFJaEMsRUFBSSxFQUFHQSxFQUFJK0IsRUFBYzlCLE9BQVFELElBQ3pDdUIsRUFBUVUsWUFBWUYsRUFBYy9CLElBRW5DdUIsRUFBUVUsWUFBWUwsR0FPckIsU0FBU0UsRUFBWWxELEVBQUtvQixHQUN6QixNQUFNdUIsRUFBVWhCLFNBQVNDLGNBQWMsWUFDakMxQyxFQUFjeUMsU0FBU2lCLGNBQWMsTUFDckNPLEVBQWdCeEIsU0FBU2lCLGNBQWMsT0FDdkNVLEVBQVEzQixTQUFTaUIsY0FBYyxTQUMvQlcsRUFBYTVCLFNBQVNpQixjQUFjLFNBQ3BDWSxFQUFZN0IsU0FBU2lCLGNBQWMsUUFDbkNhLEVBQWdCOUIsU0FBU2lCLGNBQWMsT0FDdkNjLEVBQVcvQixTQUFTaUIsY0FBYyxPQUNsQ2hDLEVBQVdlLFNBQVNpQixjQUFjLE1BQ2xDVCxFQUFrQlIsU0FBU2lCLGNBQWMsT0FDekNSLEVBQVdULFNBQVNpQixjQUFjLFNBQ2xDZSxFQUFpQmhDLFNBQVNpQixjQUFjLE9BSXhDZ0IsRUFBTWpDLFNBQVNpQixjQUFjLFFBQzdCaUIsRUFBT2xDLFNBQVNpQixjQUFjLFFBQ3BDaUIsRUFBSy9CLFVBQVVHLElBQUksa0JBQ25CMkIsRUFBSTlCLFVBQVVHLElBQUksa0JBQ2xCNEIsRUFBS1osWUFBYyxPQUNuQlcsRUFBSVgsWUFBYyxTQUVsQixNQUFNRCxFQUNMLGNBQXlCLGdCQUF3QjlELFlBQ2xEQSxFQUFZK0QsWUFBY0QsRUFFMUJwQyxFQUFTcUMsWUFBY2pELEVBQUlZLFNBQzNCdUIsRUFBZ0JjLFlBQWNqRCxFQUFJYSxZQUNsQ3VCLEVBQVNTLGFBQWEsT0FBUSxRQUM5QlQsRUFBU0UsTUFBUXRDLEVBQUljLEtBQ3JCc0IsRUFBU04sVUFBVUcsSUFBSSxpQkFDdkJxQixFQUFNVCxhQUFhLE9BQVEsWUFJM0JhLEVBQVM1QixVQUFVRyxJQUFJLGFBQ3ZCa0IsRUFBY3JCLFVBQVVHLElBQUksa0JBQzVCcUIsRUFBTXhCLFVBQVVHLElBQUksbUJBQ3BCNEIsRUFBSy9CLFVBQVVHLElBQUksT0FDbkIyQixFQUFJOUIsVUFBVUcsSUFBSSxPQUNsQndCLEVBQWMzQixVQUFVRyxJQUFJLGtCQUM1QjBCLEVBQWU3QixVQUFVRyxJQUFJLG1CQUU3QjRCLEVBQUtDLGlCQUFpQixTQUFTLE1BOENoQyxTQUFrQjFDLEdBQ2pCLElBQUlELEVBQU8sY0FBeUIsZ0JBQXdCaEMsVUFDNUQsTUFBTXlCLEVBQVdlLFNBQVNDLGNBQWMsY0FDbENPLEVBQWtCUixTQUFTQyxjQUFjLHFCQUN6Q1EsRUFBV1QsU0FBU0MsY0FBYyxjQUNsQ1MsRUFBZVYsU0FBU0MsY0FBYyxhQUU1Q2hCLEVBQVMwQixNQUFRbkIsRUFBS0MsR0FBR1IsU0FDekJ1QixFQUFnQkcsTUFBUW5CLEVBQUtDLEdBQUdQLFlBQ2hDdUIsRUFBU0UsTUFBUW5CLEVBQUtDLEdBQUdOLEtBQ3pCdUIsRUFBYUMsTUFBUW5CLEVBQUtDLEdBQUdMLFNBQzdCVSxJQUVBaUIsRUFBVXFCLG9CQUFvQixTQUFVN0IsR0FFeENRLEVBQVVvQixpQkFBaUIsVUFBVSxTQUFTRSxJQUM3QzdDLEVBQUtDLEdBQUdSLFNBQVdBLEVBQVMwQixNQUM1Qm5CLEVBQUtDLEdBQUdQLFlBQWNzQixFQUFnQkcsTUFDdENuQixFQUFLQyxHQUFHTixLQUFPc0IsRUFBU0UsTUFDeEJuQixFQUFLQyxHQUFHTCxTQUFXc0IsRUFBYUMsTUFDaEMsSUFBSWhDLEVBQVEsZUFDWixjQUF5QkEsR0FBT25CLFVBQVksV0FDM0MsY0FBeUJtQixHQUFPbkIsV0FFakM0RCxJQUNBUCxJQUNBZixJQUNBYixFQUFTMEIsTUFBUSxHQUNqQkgsRUFBZ0JHLE1BQVEsR0FDeEJGLEVBQVNFLE1BQVEsR0FDakJELEVBQWFDLE1BQVEsTUFDckIsY0FBeUIsZUFDekJqRCxLQUFLMEUsb0JBQW9CLFNBQVVDLEdBQ25DdEIsRUFBVW9CLGlCQUFpQixTQUFVNUIsTUE5RXJDK0IsQ0FBUzdDLE1BR1Z3QyxFQUFJRSxpQkFBaUIsU0FBUyxLQUM3QjVELFFBQVFDLElBQUlpQixHQThFZCxTQUFvQkEsR0FDUixjQUF5QixnQkFBd0JqQyxVQUN2RHFCLE9BQU9ZLEVBQUcsR0FDZixjQUF5QixlQUN6Qm9CLElBakZDMEIsQ0FBVzlDLE1BR1pnQixFQUFTMEIsaUJBQWlCLFVBQVUsS0FDbkM5RCxFQUFJYyxLQUFPc0IsRUFBU0UsTUFDcEIsY0FBeUIsa0JBRzFCZ0IsRUFBTVEsaUJBQWlCLFNBQVMsS0FDL0I5RCxFQUFJZ0IsVUFBWXNDLEVBQU1hLFFBQ3RCLGNBQXlCLGtCQUcxQmIsRUFBTWEsUUFBVW5FLEVBQUlnQixVQUVDLFNBQWpCaEIsRUFBSWUsV0FDUHlDLEVBQVVZLE1BQU1DLFFBQVUsd0NBQ04sV0FBakJyRSxFQUFJZSxXQUNQeUMsRUFBVVksTUFBTUMsUUFBVSw4Q0FDTixRQUFqQnJFLEVBQUllLFdBQ1B5QyxFQUFVWSxNQUFNQyxRQUFVLDRDQUUzQmQsRUFBV1QsWUFBWVEsR0FDdkJDLEVBQVdULFlBQVlVLEdBQ3ZCQSxFQUFVMUIsVUFBVUcsSUFBSSxtQkFDeEJ5QixFQUFTWixZQUFZbEMsR0FDckI4QyxFQUFTWixZQUFZWCxHQUNyQnNCLEVBQWNYLFlBQVlTLEdBQzFCRSxFQUFjWCxZQUFZWSxHQUMxQkMsRUFBZWIsWUFBWVYsR0FDM0J1QixFQUFlYixZQUFZZSxHQUMzQkYsRUFBZWIsWUFBWWMsR0FFM0JULEVBQWNMLFlBQVlXLEdBRTFCTixFQUFjTCxZQUFZYSxHQUUxQmhCLEVBQVFHLFlBQVlLLEdBK0NyQixPQW5NQVQsRUFBVW9CLGlCQUFpQixVQUFXUSxJQUNyQ0EsRUFBRUMsb0JBRUg3QixFQUFVb0IsaUJBQWlCLFNBQVU1QixHQWdNOUIsQ0FBRXNDLGNBMU9ULFdBQ0MsUUFBK0JDLElBQTNCLGVBQXNDLENBQ3pDLE1BQU1DLEVBQWEvQyxTQUFTQyxjQUFjLGFBQzFDOEMsRUFBVzVDLFVBQVU2QyxPQUFPLFVBRVZoRCxTQUFTQyxjQUFjLGVBRS9Ca0MsaUJBQWlCLFFBQVNyQyxHQUNwQ2lELEVBQVdaLGlCQUFpQixRQUFTckMsUUFDL0JPLEtBaU9nQkEsbUJBQWtCUSxjQUFhTyxjQTNPeEMsR0NrSWhCLEVBakltQixNQUNsQixNQUFNNkIsRUFBbUJqRCxTQUFTQyxjQUFjLHVCQVdoRCxTQUFTaUQsRUFBV0MsRUFBVzFELEdBQzlCLE1BQU14QixFQUFVK0IsU0FBU2lCLGNBQWMsT0FDakMxRCxFQUFjeUMsU0FBU2lCLGNBQWMsT0FFckNpQixFQUFPbEMsU0FBU2lCLGNBQWMsUUFFOUJnQixFQUFNakMsU0FBU2lCLGNBQWMsUUFFbkNoRCxFQUFRa0MsVUFBVUcsSUFBSSxXQUN0Qi9DLEVBQVk0QyxVQUFVRyxJQUFJLGlCQUMxQjRCLEVBQUsvQixVQUFVRyxJQUFJLE9BQ25CNEIsRUFBSy9CLFVBQVVHLElBQUksa0JBQ25CMkIsRUFBSTlCLFVBQVVHLElBQUksa0JBQ2xCMkIsRUFBSTlCLFVBQVVHLElBQUksT0FFbEI0QixFQUFLWixZQUFjLE9BQ25CVyxFQUFJWCxZQUFjLFNBRWxCL0QsRUFBWTRFLGlCQUFpQixTQUFVUSxJQUN0Q0EsRUFBRVMsa0JBQ0ZDLElBQ0EsU0FBb0I1RCxHQUFHLEdBQ3ZCNkQsT0FHRHBCLEVBQUtDLGlCQUFpQixTQUFVUSxJQUMvQkEsRUFBRVMsa0JBdURKLFNBQXFCM0QsR0FDcEIsTUFBTXhCLEVBQVUrQixTQUFTeUIsaUJBQWlCLFlBQ3BDSixFQUFlckIsU0FBU3lCLGlCQUFpQixrQkFDekM4QixFQUFXdkQsU0FBU2lCLGNBQWMsU0FDeENzQyxFQUFTcEQsVUFBVUcsSUFBSSxhQUN2QmlELEVBQVNwRCxVQUFVRyxJQUFJLGdCQUN2QmlELEVBQVNyQyxhQUFhLE9BQVEsUUFDOUJxQyxFQUFTckMsYUFBYSxZQUFhLE1BQ25DcUMsRUFBUzVDLE1BQVEsY0FBeUJsQixHQUFHbEMsWUFDN0NVLEVBQVF3QixHQUFHaUMsWUFBWUwsRUFBYTVCLElBQ3BDeEIsRUFBUXdCLEdBQUcwQixZQUFZb0MsR0FDdkJBLEVBQVNwQixpQkFBaUIsWUFBYVEsSUFDeEIsVUFBVkEsRUFBRWEsTUFDTGpGLFFBQVFDLElBQUksT0FDWixhQUF3QitFLEVBQVM1QyxNQUFPbEIsR0FDeEM2RCxRQXJFREcsQ0FBWWhFLE1BR2J3QyxFQUFJRSxpQkFBaUIsU0FBVVEsSUFDOUJBLEVBQUVTLGtCQXNDSixTQUF1QjNELEdBQ3RCLE1BQU14QixFQUFVK0IsU0FBU3lCLGlCQUFpQixZQUMxQ3dCLEVBQWlCdkIsWUFBWXpELEVBQVF3QixJQUNyQyxnQkFBMkJBLEdBQzNCNkQsSUFDQS9FLFFBQVFDLElBQUksZ0JBQ1osbUJBQytCc0UsSUFBM0IsZ0JBQ0gscUJBN0NBWSxDQUFjakUsTUFHZmxDLEVBQVkrRCxZQUFjNkIsRUFFMUJsRixFQUFRa0QsWUFBWTVELEdBQ3BCVSxFQUFRa0QsWUFBWWUsR0FDcEJqRSxFQUFRa0QsWUFBWWMsR0FFcEJnQixFQUFpQjlCLFlBQVlsRCxHQUc5QixTQUFTcUYsS0FlVCxXQUNDLEtBQU9MLEVBQWlCVSxZQUN2QlYsRUFBaUJ2QixZQUFZdUIsRUFBaUJVLFlBaEIvQ0MsR0FDQSxJQUFJbkUsRUFBSSxFQUNKRCxFQUFPLGNBRVgsSUFEQWpCLFFBQVFDLElBQUlnQixHQUNKQyxFQUFJRCxFQUFLRSxPQUFRRCxJQUN4QnlELEVBQVcxRCxFQUFLQyxHQUFHbEMsWUFBYWtDLElBQ1AsSUFBckJELEVBQUtDLEdBQUdoQyxXQUNYb0csRUFBY3BFLEdBQ2Qsa0JBQ0EsaUJBK0NILFNBQVNvRSxFQUFjcEUsR0FDdEI0RCxJQUNBLFNBQW9CNUQsR0FBRyxHQUNGTyxTQUFTeUIsaUJBQWlCLGtCQUNsQ2hDLEdBQUdnRCxNQUFNQyxRQUFVLG9CQUdqQyxTQUFTVyxJQUNSLElBQUssSUFBSTVELEVBQUksRUFBR0EsRUFBSSxxQkFBaUNBLElBQ3BELFNBQW9CQSxHQUFHLEdBSXpCLE9BNUhvQk8sU0FBU0MsY0FBYyxnQkFFL0JrQyxpQkFBaUIsVUFBV1EsSUFDdkNBLEVBQUVDLGlCQUNGLE1BQU1rQixFQUFjOUQsU0FBU0MsY0FBYyxpQkF1RTVDLElBQTJCMUMsSUF0RVJ1RyxFQUFZbkQsTUF1RTlCLGNBQXlCcEQsRUFBYSxJQXRFdEMrRixJQUNBUSxFQUFZbkQsTUFBUSxNQXFIZCxDQUFFdUMsYUFBWUksV0E5SEgsR0NIbEIvRSxRQUFRQyxJQUFJLFFDS2IsWSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUHJvamVjdCB7XG5cdGNvbnN0cnVjdG9yKHByb2plY3ROYW1lLCB0b2RvX2xpc3QsIHNlbGVjdGVkKSB7XG5cdFx0dGhpcy5wcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lO1xuXHRcdHRoaXMudG9kb19saXN0ID0gdG9kb19saXN0O1xuXHRcdHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcblx0fVxufVxuXG5jb25zdCBwcm9qZWN0TG9naWMgPSAoKCkgPT4ge1xuXHRsZXQgcHJvamVjdExpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFzay5wcm9qZWN0c1wiKSkgfHwgW107XG5cblx0ZnVuY3Rpb24gc2F2ZVByb2plY3QocHJvamVjdCkge1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFzay5wcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0KSk7XG5cdH1cblxuXHRmdW5jdGlvbiBtYWtlUHJvamVjdChwcm9qZWN0TmFtZSwgdG9kb19saXN0KSB7XG5cdFx0bGV0IG9iaiA9IG5ldyBQcm9qZWN0KHByb2plY3ROYW1lLCB0b2RvX2xpc3QpO1xuXHRcdHByb2plY3RMaXN0LnB1c2gob2JqKTtcblx0XHRjb25zb2xlLmxvZyh7IHByb2plY3RMaXN0IH0pO1xuXHRcdHNhdmVQcm9qZWN0KHByb2plY3RMaXN0KTtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlbW92ZVByb2plY3QoaW5kZXgpIHtcblx0XHRwcm9qZWN0TGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdHNhdmVQcm9qZWN0KHByb2plY3RMaXN0KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGNoYW5nZU5hbWUobmV3TmFtZSwgaW5kZXgpIHtcblx0XHRwcm9qZWN0TGlzdFtpbmRleF0ucHJvamVjdE5hbWUgPSBuZXdOYW1lO1xuXHRcdHNhdmVQcm9qZWN0KHByb2plY3RMaXN0KTtcblx0fVxuXG5cdGZ1bmN0aW9uIHNlbGVjdChpbmRleCwgYm9vbCkge1xuXHRcdHByb2plY3RMaXN0W2luZGV4XS5zZWxlY3RlZCA9IGJvb2w7XG5cdFx0c2F2ZVByb2plY3QocHJvamVjdExpc3QpO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRtYWtlUHJvamVjdCxcblx0XHRjaGFuZ2VOYW1lLFxuXHRcdHJlbW92ZVByb2plY3QsXG5cdFx0c2VsZWN0LFxuXHRcdHNhdmVQcm9qZWN0LFxuXHRcdHByb2plY3RMaXN0LFxuXHR9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdExvZ2ljO1xuIiwiaW1wb3J0IHByb2plY3RMb2dpYyBmcm9tIFwiLi9wcm9qZWN0LWxvZ2ljLmpzXCI7XG5cbmNsYXNzIFRvZG8ge1xuXHRjb25zdHJ1Y3Rvcih0b2RvTmFtZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5LCBjb21wbGV0ZWQpIHtcblx0XHR0aGlzLnRvZG9OYW1lID0gdG9kb05hbWU7XG5cdFx0dGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuXHRcdHRoaXMuZGF0ZSA9IGRhdGU7XG5cdFx0dGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuXHRcdHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG5cdH1cbn1cblxuY29uc3QgdG9kb0xvZ2ljID0gKCgpID0+IHtcblx0bGV0IHRvZG9MaXN0ID0gW107XG5cblx0ZnVuY3Rpb24gbWFrZVRvZG8odG9kb05hbWUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSkge1xuXHRcdGxldCBvYmogPSBuZXcgVG9kbyh0b2RvTmFtZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5KTtcblx0XHR0b2RvTGlzdC5wdXNoKG9iaik7XG5cdFx0cmV0dXJuIG9iajtcblx0fVxuXG5cdGZ1bmN0aW9uIHNvcnRMaXN0KGxpc3QpIHtcblx0XHRsZXQgbmV3TGlzdCA9IFtdO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKGxpc3RbaV0ucHJpb3JpdHkgPT09IFwiSGlnaFwiKSB7XG5cdFx0XHRcdG5ld0xpc3QucHVzaChsaXN0W2ldKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAobGlzdFtpXS5wcmlvcml0eSA9PT0gXCJNZWRpdW1cIikge1xuXHRcdFx0XHRuZXdMaXN0LnB1c2gobGlzdFtpXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKGxpc3RbaV0ucHJpb3JpdHkgPT09IFwiTG93XCIpIHtcblx0XHRcdFx0bmV3TGlzdC5wdXNoKGxpc3RbaV0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBuZXdMaXN0O1xuXHR9XG5cblx0ZnVuY3Rpb24gaXNTZWxlY3RlZCgpIHtcblx0XHRsZXQgbGlzdCA9IHByb2plY3RMb2dpYy5wcm9qZWN0TGlzdDtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChsaXN0W2ldLnNlbGVjdGVkID09PSB0cnVlKSByZXR1cm4gaTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4geyBpc1NlbGVjdGVkLCBtYWtlVG9kbywgc29ydExpc3QgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHRvZG9Mb2dpYztcbiIsImltcG9ydCBwcm9qZWN0TG9naWMgZnJvbSBcIi4vcHJvamVjdC1sb2dpYy5qc1wiO1xuaW1wb3J0IHRvZG9Mb2dpYyBmcm9tIFwiLi90b2RvLWxvZ2ljLmpzXCI7XG5cbmNvbnN0IHRvZG9ET00gPSAoKCkgPT4ge1xuXHRmdW5jdGlvbiBhZGRUb2RvQnV0dG9uKCkge1xuXHRcdGlmICh0b2RvTG9naWMuaXNTZWxlY3RlZCgpICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGNvbnN0IHRvZG9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tYnRuXCIpO1xuXHRcdFx0dG9kb0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiY2xvc2VkXCIpO1xuXG5cdFx0XHRjb25zdCBtb2RhbEV4aXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vZGFsLWV4aXRcIik7XG5cblx0XHRcdG1vZGFsRXhpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlTW9kYWwpO1xuXHRcdFx0dG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlTW9kYWwpO1xuXHRcdH0gZWxzZSByZW1vdmVUb2RvQnV0dG9uKCk7XG5cdH1cblxuXHRmdW5jdGlvbiB0b2dnbGVNb2RhbCgpIHtcblx0XHRjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIik7XG5cdFx0Y29uc3QgbW9kYWxPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1vdmVybGF5XCIpO1xuXG5cdFx0bW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShcImNsb3NlZFwiKTtcblx0XHRtb2RhbE92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZShcImNsb3NlZFwiKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlbW92ZVRvZG9CdXR0b24oKSB7XG5cdFx0Y29uc3QgdG9kb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kby1idG5cIik7XG5cdFx0dG9kb0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2xvc2VkXCIpO1xuXHR9XG5cblx0ZnVuY3Rpb24gbW9kYWxGbG93KCkge1xuXHRcdGNvbnN0IHRvZG9OYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLW5hbWVcIik7XG5cdFx0Y29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLWRlc2NyaXB0aW9uXCIpO1xuXHRcdGNvbnN0IHRvZG9EYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLWRhdGVcIik7XG5cdFx0Y29uc3QgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eVwiKTtcblx0XHRmb3JtU3VibWl0KCk7XG5cdFx0dG9kb05hbWUudmFsdWUgPSBcIlwiO1xuXHRcdHRvZG9EZXNjcmlwdGlvbi52YWx1ZSA9IFwiXCI7XG5cdFx0dG9kb0RhdGUudmFsdWUgPSBcIlwiO1xuXHRcdHRvZG9Qcmlvcml0eS52YWx1ZSA9IFwiTG93XCI7XG5cdFx0dG9nZ2xlTW9kYWwoKTtcblx0fVxuXG5cdGNvbnN0IG1vZGFsRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9kYWwtZm9ybVwiKTtcblx0bW9kYWxGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdH0pO1xuXHRtb2RhbEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBtb2RhbEZsb3cpO1xuXG5cdGZ1bmN0aW9uIGZvcm1TdWJtaXQoKSB7XG5cdFx0Y29uc3QgdG9kb05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tbmFtZVwiKTtcblx0XHRjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tZGVzY3JpcHRpb25cIik7XG5cdFx0Y29uc3QgdG9kb0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tZGF0ZVwiKS52YWx1ZTtcblx0XHRjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5XCIpO1xuXG5cdFx0bGV0IHRvZG8gPSB0b2RvTG9naWMubWFrZVRvZG8oXG5cdFx0XHR0b2RvTmFtZS52YWx1ZSxcblx0XHRcdHRvZG9EZXNjcmlwdGlvbi52YWx1ZSxcblx0XHRcdHRvZG9EYXRlLFxuXHRcdFx0dG9kb1ByaW9yaXR5LnZhbHVlXG5cdFx0KTtcblxuXHRcdGxldCBpbmRleCA9IHRvZG9Mb2dpYy5pc1NlbGVjdGVkKCk7XG5cdFx0cHJvamVjdExvZ2ljLnByb2plY3RMaXN0W2luZGV4XS50b2RvX2xpc3QucHVzaCh0b2RvKTtcblx0XHRwcm9qZWN0TG9naWMucHJvamVjdExpc3RbaW5kZXhdLnRvZG9fbGlzdCA9IHRvZG9Mb2dpYy5zb3J0TGlzdChcblx0XHRcdHByb2plY3RMb2dpYy5wcm9qZWN0TGlzdFtpbmRleF0udG9kb19saXN0XG5cdFx0KTtcblx0XHRwcm9qZWN0TG9naWMuc2F2ZVByb2plY3QocHJvamVjdExvZ2ljLnByb2plY3RMaXN0KTtcblx0XHRjb25zb2xlLmxvZyhwcm9qZWN0TG9naWMucHJvamVjdExpc3RbaW5kZXhdKTtcblx0XHRkaXNwbGF5VG9kbygpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZGlzcGxheVRvZG8oKSB7XG5cdFx0bGV0IGluZGV4ID0gdG9kb0xvZ2ljLmlzU2VsZWN0ZWQoKTtcblx0XHRsZXQgbGlzdCA9IHByb2plY3RMb2dpYy5wcm9qZWN0TGlzdFtpbmRleF07XG5cdFx0Y29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblx0XHRjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcblx0XHRwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRlbnQtdGl0bGVcIik7XG5cdFx0Y29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG5cdFx0Y2xlYXJUb2RvKCk7XG5cdFx0Y29uc3QgcHJvamVjdFRpdGxlID1cblx0XHRcdHByb2plY3RMb2dpYy5wcm9qZWN0TGlzdFt0b2RvTG9naWMuaXNTZWxlY3RlZCgpXS5wcm9qZWN0TmFtZTtcblx0XHRwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHByb2plY3RUaXRsZTtcblx0XHRjb250ZW50LmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcblx0XHRjb25zb2xlLmxvZyhsaXN0LnRvZG9fbGlzdCk7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0LnRvZG9fbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdFx0bWFrZVRvZG9UYWcobGlzdC50b2RvX2xpc3RbaV0sIGkpO1xuXHRcdFx0Y29uc29sZS5sb2coXCJ0ZXN0MlwiKTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBjbGVhclRvZG8oKSB7XG5cdFx0Y29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblx0XHRjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnQtdGl0bGVcIik7XG5cdFx0Y29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9kby1jb250YWluZXJcIik7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvQ29udGFpbmVyLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb250ZW50LnJlbW92ZUNoaWxkKHRvZG9Db250YWluZXJbaV0pO1xuXHRcdH1cblx0XHRjb250ZW50LnJlbW92ZUNoaWxkKHByb2plY3RUaXRsZSk7XG5cblx0XHQvLyB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG5cdFx0Ly8gXHRjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuZmlyc3RDaGlsZCk7XG5cdFx0Ly8gfVxuXHR9XG5cblx0ZnVuY3Rpb24gbWFrZVRvZG9UYWcob2JqLCBpKSB7XG5cdFx0Y29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblx0XHRjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcblx0XHRjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRjb25zdCBjaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0XHRjb25zdCBjaGVja0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXHRcdGNvbnN0IGNoZWNrU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRcdGNvbnN0IGxlZnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdGNvbnN0IHRvZG9UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRjb25zdCB0b2RvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcblx0XHRjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdGNvbnN0IHRvZG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRcdGNvbnN0IHJpZ2h0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHQvLyBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0XHQvLyBjb25zdCBkZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG5cdFx0Y29uc3QgZGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdFx0Y29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRcdGVkaXQuY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLWljb25zXCIpO1xuXHRcdGRlbC5jbGFzc0xpc3QuYWRkKFwibWF0ZXJpYWwtaWNvbnNcIik7XG5cdFx0ZWRpdC50ZXh0Q29udGVudCA9IFwiZWRpdFwiO1xuXHRcdGRlbC50ZXh0Q29udGVudCA9IFwiZGVsZXRlXCI7XG5cblx0XHRjb25zdCBwcm9qZWN0VGl0bGUgPVxuXHRcdFx0cHJvamVjdExvZ2ljLnByb2plY3RMaXN0W3RvZG9Mb2dpYy5pc1NlbGVjdGVkKCldLnByb2plY3ROYW1lO1xuXHRcdHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gcHJvamVjdFRpdGxlO1xuXG5cdFx0dG9kb05hbWUudGV4dENvbnRlbnQgPSBvYmoudG9kb05hbWU7XG5cdFx0dG9kb0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gb2JqLmRlc2NyaXB0aW9uO1xuXHRcdHRvZG9EYXRlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuXHRcdHRvZG9EYXRlLnZhbHVlID0gb2JqLmRhdGU7XG5cdFx0dG9kb0RhdGUuY2xhc3NMaXN0LmFkZChcInRvZG8tZGF0ZS1kaXZcIik7XG5cdFx0Y2hlY2suc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuXHRcdC8vIGVkaXQudGV4dENvbnRlbnQgPSBcIkVcIjtcblx0XHQvLyBkZWwudGV4dENvbnRlbnQgPSBcIlhcIjtcblxuXHRcdHRvZG9UZXh0LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXRleHRcIik7XG5cdFx0dG9kb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9kby1jb250YWluZXJcIik7XG5cdFx0Y2hlY2suY2xhc3NMaXN0LmFkZChcImN1c3RvbS1jaGVja2JveFwiKTtcblx0XHRlZGl0LmNsYXNzTGlzdC5hZGQoXCJidG5cIik7XG5cdFx0ZGVsLmNsYXNzTGlzdC5hZGQoXCJidG5cIik7XG5cdFx0bGVmdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibGVmdC1jb250YWluZXJcIik7XG5cdFx0cmlnaHRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInJpZ2h0LWNvbnRhaW5lclwiKTtcblxuXHRcdGVkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdGVkaXRUb2RvKGkpO1xuXHRcdH0pO1xuXG5cdFx0ZGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhpKTtcblx0XHRcdGRlbGV0ZVRvZG8oaSk7XG5cdFx0fSk7XG5cblx0XHR0b2RvRGF0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcblx0XHRcdG9iai5kYXRlID0gdG9kb0RhdGUudmFsdWU7XG5cdFx0XHRwcm9qZWN0TG9naWMuc2F2ZVByb2plY3QocHJvamVjdExvZ2ljLnByb2plY3RMaXN0KTtcblx0XHR9KTtcblxuXHRcdGNoZWNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRvYmouY29tcGxldGVkID0gY2hlY2suY2hlY2tlZDtcblx0XHRcdHByb2plY3RMb2dpYy5zYXZlUHJvamVjdChwcm9qZWN0TG9naWMucHJvamVjdExpc3QpO1xuXHRcdH0pO1xuXG5cdFx0Y2hlY2suY2hlY2tlZCA9IG9iai5jb21wbGV0ZWQ7XG5cblx0XHRpZiAob2JqLnByaW9yaXR5ID09PSBcIkhpZ2hcIilcblx0XHRcdGNoZWNrU3Bhbi5zdHlsZS5jc3NUZXh0ID0gXCJib3JkZXItY29sb3I6IHJlZDsgLS1jaGVja0NvbG9yOiByZWRcIjtcblx0XHRpZiAob2JqLnByaW9yaXR5ID09PSBcIk1lZGl1bVwiKVxuXHRcdFx0Y2hlY2tTcGFuLnN0eWxlLmNzc1RleHQgPSBcImJvcmRlci1jb2xvcjogb3JhbmdlOyAtLWNoZWNrQ29sb3I6IG9yYW5nZVwiO1xuXHRcdGlmIChvYmoucHJpb3JpdHkgPT09IFwiTG93XCIpXG5cdFx0XHRjaGVja1NwYW4uc3R5bGUuY3NzVGV4dCA9IFwiYm9yZGVyLWNvbG9yOiBncmVlbjsgLS1jaGVja0NvbG9yOiBncmVlblwiO1xuXG5cdFx0Y2hlY2tMYWJlbC5hcHBlbmRDaGlsZChjaGVjayk7XG5cdFx0Y2hlY2tMYWJlbC5hcHBlbmRDaGlsZChjaGVja1NwYW4pO1xuXHRcdGNoZWNrU3Bhbi5jbGFzc0xpc3QuYWRkKFwiY3VzdG9tLWNoZWNrYm94XCIpO1xuXHRcdHRvZG9UZXh0LmFwcGVuZENoaWxkKHRvZG9OYW1lKTtcblx0XHR0b2RvVGV4dC5hcHBlbmRDaGlsZCh0b2RvRGVzY3JpcHRpb24pO1xuXHRcdGxlZnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tMYWJlbCk7XG5cdFx0bGVmdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvVGV4dCk7XG5cdFx0cmlnaHRDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0RhdGUpO1xuXHRcdHJpZ2h0Q29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXQpO1xuXHRcdHJpZ2h0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlbCk7XG5cdFx0Ly8gdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVjayk7XG5cdFx0dG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChsZWZ0Q29udGFpbmVyKTtcblx0XHQvLyB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9UZXh0KTtcblx0XHR0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJpZ2h0Q29udGFpbmVyKTtcblxuXHRcdGNvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb0NvbnRhaW5lcik7XG5cdH1cblxuXHRmdW5jdGlvbiBlZGl0VG9kbyhpKSB7XG5cdFx0bGV0IGxpc3QgPSBwcm9qZWN0TG9naWMucHJvamVjdExpc3RbdG9kb0xvZ2ljLmlzU2VsZWN0ZWQoKV0udG9kb19saXN0O1xuXHRcdGNvbnN0IHRvZG9OYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLW5hbWVcIik7XG5cdFx0Y29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLWRlc2NyaXB0aW9uXCIpO1xuXHRcdGNvbnN0IHRvZG9EYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvLWRhdGVcIik7XG5cdFx0Y29uc3QgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eVwiKTtcblxuXHRcdHRvZG9OYW1lLnZhbHVlID0gbGlzdFtpXS50b2RvTmFtZTtcblx0XHR0b2RvRGVzY3JpcHRpb24udmFsdWUgPSBsaXN0W2ldLmRlc2NyaXB0aW9uO1xuXHRcdHRvZG9EYXRlLnZhbHVlID0gbGlzdFtpXS5kYXRlO1xuXHRcdHRvZG9Qcmlvcml0eS52YWx1ZSA9IGxpc3RbaV0ucHJpb3JpdHk7XG5cdFx0dG9nZ2xlTW9kYWwoKTtcblxuXHRcdG1vZGFsRm9ybS5yZW1vdmVFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIG1vZGFsRmxvdyk7XG5cblx0XHRtb2RhbEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiB0b2RvRWRpdEZvcm0oKSB7XG5cdFx0XHRsaXN0W2ldLnRvZG9OYW1lID0gdG9kb05hbWUudmFsdWU7XG5cdFx0XHRsaXN0W2ldLmRlc2NyaXB0aW9uID0gdG9kb0Rlc2NyaXB0aW9uLnZhbHVlO1xuXHRcdFx0bGlzdFtpXS5kYXRlID0gdG9kb0RhdGUudmFsdWU7XG5cdFx0XHRsaXN0W2ldLnByaW9yaXR5ID0gdG9kb1ByaW9yaXR5LnZhbHVlO1xuXHRcdFx0bGV0IGluZGV4ID0gdG9kb0xvZ2ljLmlzU2VsZWN0ZWQoKTtcblx0XHRcdHByb2plY3RMb2dpYy5wcm9qZWN0TGlzdFtpbmRleF0udG9kb19saXN0ID0gdG9kb0xvZ2ljLnNvcnRMaXN0KFxuXHRcdFx0XHRwcm9qZWN0TG9naWMucHJvamVjdExpc3RbaW5kZXhdLnRvZG9fbGlzdFxuXHRcdFx0KTtcblx0XHRcdGNsZWFyVG9kbygpO1xuXHRcdFx0ZGlzcGxheVRvZG8oKTtcblx0XHRcdHRvZ2dsZU1vZGFsKCk7XG5cdFx0XHR0b2RvTmFtZS52YWx1ZSA9IFwiXCI7XG5cdFx0XHR0b2RvRGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xuXHRcdFx0dG9kb0RhdGUudmFsdWUgPSBcIlwiO1xuXHRcdFx0dG9kb1ByaW9yaXR5LnZhbHVlID0gXCJMb3dcIjtcblx0XHRcdHByb2plY3RMb2dpYy5zYXZlUHJvamVjdChwcm9qZWN0TG9naWMucHJvamVjdExpc3QpO1xuXHRcdFx0dGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHRvZG9FZGl0Rm9ybSk7XG5cdFx0XHRtb2RhbEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBtb2RhbEZsb3cpO1xuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gZGVsZXRlVG9kbyhpKSB7XG5cdFx0bGV0IGxpc3QgPSBwcm9qZWN0TG9naWMucHJvamVjdExpc3RbdG9kb0xvZ2ljLmlzU2VsZWN0ZWQoKV0udG9kb19saXN0O1xuXHRcdGxpc3Quc3BsaWNlKGksIDEpO1xuXHRcdHByb2plY3RMb2dpYy5zYXZlUHJvamVjdChwcm9qZWN0TG9naWMucHJvamVjdExpc3QpO1xuXHRcdGRpc3BsYXlUb2RvKCk7XG5cdH1cblxuXHRyZXR1cm4geyBhZGRUb2RvQnV0dG9uLCByZW1vdmVUb2RvQnV0dG9uLCBkaXNwbGF5VG9kbywgY2xlYXJUb2RvIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCB0b2RvRE9NO1xuIiwiaW1wb3J0IHByb2plY3RMb2dpYyBmcm9tIFwiLi9wcm9qZWN0LWxvZ2ljLmpzXCI7XG5pbXBvcnQgdG9kb0xvZ2ljIGZyb20gXCIuL3RvZG8tbG9naWMuanNcIjtcbmltcG9ydCB0b2RvRE9NIGZyb20gXCIuL3RvZG8tZG9tLmpzXCI7XG5cbmNvbnN0IHByb2plY3RET00gPSAoKCkgPT4ge1xuXHRjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0cy1jb250YWluZXJcIik7XG5cdGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdFwiKTtcblxuXHRwcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNvbnN0IHByb2plY3RUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LW5hbWVcIik7XG5cdFx0YWRkUHJvamVjdFRvQXJyYXkocHJvamVjdFRleHQudmFsdWUpO1xuXHRcdHJlbmRlcigpO1xuXHRcdHByb2plY3RUZXh0LnZhbHVlID0gXCJcIjtcblx0fSk7XG5cblx0ZnVuY3Rpb24gYWRkUHJvamVjdChpbnB1dE5hbWUsIGkpIHtcblx0XHRjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0Ly8gY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdFx0Y29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRcdC8vIGNvbnN0IGRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdFx0Y29uc3QgZGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cblx0XHRwcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuXHRcdHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRpdGxlXCIpO1xuXHRcdGVkaXQuY2xhc3NMaXN0LmFkZChcImJ0blwiKTtcblx0XHRlZGl0LmNsYXNzTGlzdC5hZGQoXCJtYXRlcmlhbC1pY29uc1wiKTtcblx0XHRkZWwuY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLWljb25zXCIpO1xuXHRcdGRlbC5jbGFzc0xpc3QuYWRkKFwiYnRuXCIpO1xuXHRcdC8vIGVkaXQudGV4dENvbnRlbnQgPSBcIkVcIjtcblx0XHRlZGl0LnRleHRDb250ZW50ID0gXCJlZGl0XCI7XG5cdFx0ZGVsLnRleHRDb250ZW50ID0gXCJkZWxldGVcIjtcblxuXHRcdHByb2plY3ROYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdGRlc2VsZWN0UHJvamVjdCgpO1xuXHRcdFx0cHJvamVjdExvZ2ljLnNlbGVjdChpLCB0cnVlKTtcblx0XHRcdHJlbmRlcigpO1xuXHRcdH0pO1xuXG5cdFx0ZWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRlZGl0UHJvamVjdChpKTtcblx0XHR9KTtcblxuXHRcdGRlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRkZWxldGVQcm9qZWN0KGkpO1xuXHRcdH0pO1xuXG5cdFx0cHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBpbnB1dE5hbWU7XG5cblx0XHRwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcblx0XHRwcm9qZWN0LmFwcGVuZENoaWxkKGVkaXQpO1xuXHRcdHByb2plY3QuYXBwZW5kQ2hpbGQoZGVsKTtcblxuXHRcdHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG5cdH1cblxuXHRmdW5jdGlvbiByZW5kZXIoKSB7XG5cdFx0Y2xlYXJQcm9qZWN0KCk7XG5cdFx0bGV0IGkgPSAwO1xuXHRcdGxldCBsaXN0ID0gcHJvamVjdExvZ2ljLnByb2plY3RMaXN0O1xuXHRcdGNvbnNvbGUubG9nKGxpc3QpO1xuXHRcdGZvciAoaTsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRcdGFkZFByb2plY3QobGlzdFtpXS5wcm9qZWN0TmFtZSwgaSk7XG5cdFx0XHRpZiAobGlzdFtpXS5zZWxlY3RlZCA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRzZWxlY3RQcm9qZWN0KGkpO1xuXHRcdFx0XHR0b2RvRE9NLmFkZFRvZG9CdXR0b24oKTtcblx0XHRcdFx0dG9kb0RPTS5kaXNwbGF5VG9kbygpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGNsZWFyUHJvamVjdCgpIHtcblx0XHR3aGlsZSAocHJvamVjdENvbnRhaW5lci5maXJzdENoaWxkKSB7XG5cdFx0XHRwcm9qZWN0Q29udGFpbmVyLnJlbW92ZUNoaWxkKHByb2plY3RDb250YWluZXIuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gYWRkUHJvamVjdFRvQXJyYXkocHJvamVjdE5hbWUpIHtcblx0XHRwcm9qZWN0TG9naWMubWFrZVByb2plY3QocHJvamVjdE5hbWUsIFtdKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoaSkge1xuXHRcdGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RcIik7XG5cdFx0cHJvamVjdENvbnRhaW5lci5yZW1vdmVDaGlsZChwcm9qZWN0W2ldKTtcblx0XHRwcm9qZWN0TG9naWMucmVtb3ZlUHJvamVjdChpKTtcblx0XHRyZW5kZXIoKTtcblx0XHRjb25zb2xlLmxvZyh0b2RvTG9naWMuaXNTZWxlY3RlZCgpKTtcblx0XHR0b2RvRE9NLmNsZWFyVG9kbygpO1xuXHRcdGlmICh0b2RvTG9naWMuaXNTZWxlY3RlZCgpID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHRvZG9ET00ucmVtb3ZlVG9kb0J1dHRvbigpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGVkaXRQcm9qZWN0KGkpIHtcblx0XHRjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0XCIpO1xuXHRcdGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC10aXRsZVwiKTtcblx0XHRjb25zdCBlZGl0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0XHRlZGl0VGV4dC5jbGFzc0xpc3QuYWRkKFwiZWRpdC10ZXh0XCIpO1xuXHRcdGVkaXRUZXh0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWVcIik7XG5cdFx0ZWRpdFRleHQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5cdFx0ZWRpdFRleHQuc2V0QXR0cmlidXRlKFwibWF4bGVuZ3RoXCIsIFwiMTBcIik7XG5cdFx0ZWRpdFRleHQudmFsdWUgPSBwcm9qZWN0TG9naWMucHJvamVjdExpc3RbaV0ucHJvamVjdE5hbWU7XG5cdFx0cHJvamVjdFtpXS5yZW1vdmVDaGlsZChwcm9qZWN0VGl0bGVbaV0pO1xuXHRcdHByb2plY3RbaV0uYXBwZW5kQ2hpbGQoZWRpdFRleHQpO1xuXHRcdGVkaXRUZXh0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZSkgPT4ge1xuXHRcdFx0aWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJ5ZXNcIik7XG5cdFx0XHRcdHByb2plY3RMb2dpYy5jaGFuZ2VOYW1lKGVkaXRUZXh0LnZhbHVlLCBpKTtcblx0XHRcdFx0cmVuZGVyKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBzZWxlY3RQcm9qZWN0KGkpIHtcblx0XHRkZXNlbGVjdFByb2plY3QoKTtcblx0XHRwcm9qZWN0TG9naWMuc2VsZWN0KGksIHRydWUpO1xuXHRcdGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC10aXRsZVwiKTtcblx0XHRwcm9qZWN0VGl0bGVbaV0uc3R5bGUuY3NzVGV4dCA9IFwiZm9udC13ZWlnaHQ6IGJvbGRcIjtcblx0fVxuXG5cdGZ1bmN0aW9uIGRlc2VsZWN0UHJvamVjdCgpIHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMb2dpYy5wcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdFx0cHJvamVjdExvZ2ljLnNlbGVjdChpLCBmYWxzZSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHsgYWRkUHJvamVjdCwgcmVuZGVyIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0RE9NO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGVzdCgpIHtcblx0Y29uc29sZS5sb2coXCJ0ZXN0XCIpO1xufVxuIiwiaW1wb3J0IHRlc3QgZnJvbSBcIi4vdGVzdC5qc1wiO1xuaW1wb3J0IHByb2plY3RMb2dpYyBmcm9tIFwiLi9wcm9qZWN0LWxvZ2ljLmpzXCI7XG5pbXBvcnQgcHJvamVjdERPTSBmcm9tIFwiLi9wcm9qZWN0LWRvbS5qc1wiO1xuaW1wb3J0IHRvZG9Mb2dpYyBmcm9tIFwiLi90b2RvLWxvZ2ljLmpzXCI7XG5cbnRlc3QoKTtcbnByb2plY3RET00ucmVuZGVyKCk7XG5wcm9qZWN0RE9NO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==