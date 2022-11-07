import React, { useState} from "react";
import "./App.css";




function App() {

  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);


  const addtask=()=>{
            setToDos([...toDos,{ id: Date.now(), text: toDo, status: false },]);
            setToDo('')}


   
  return (
    <div>
      <div
        className="container  mt-4 col-xl-8 col-sm-12"
        style={{ background: "white" }}
      >
        <div className="row ">
          <div className="col-6">
            <h6 className="logofont p-3">To Do App </h6>
          </div>
          <div className="col-6 d-flex justify-content-end ">
            <h6 className=" p-3">Welcome Back ! , Shamshad </h6>
          </div>
        </div>
        <div className="row px-4 pt-3">
          <h3> Create New Task</h3>

          <input
            value={toDo}
            onChange={(e) => setToDo(e.target.value)}
            type="text"
            className="form-control "
            id="addTask"
            placeholder="Enter New Task"
          />
          <button
            disabled={!toDo}
            onClick={addtask}
            type="submit"
            name="create user"
            className="btn btn-dark m-2"
          >
            Add Task
          </button>
        </div>

        <div className="row col-12 ">
          <div className=" col-xl-4 col-12 card text-bg-warning ms-3  mb-2  pb-5">
            <div className="card-header">Upcoming Tasks</div>
            <div className="card-body">
              <h5 className="card-title">


                {toDos.map((eachTodo) => 
                {
                  if (eachTodo.status === false) {
                    return (
                      <div className="row col-12">
                        <div className="col-1">
                          <input
                            onChange={
                              (e) => 
                              {
                              setToDos(toDos.filter((obj) => 
                                {
                                if (obj.id === eachTodo.id)
                                      {
                                        obj.status = e.target.checked;
                                      }
                                return obj;
                                }
                                )
                              );
                            }}
                            value={eachTodo.status}
                            type="checkbox"
                          />
                        </div>
                        <div className="col-8">{eachTodo.text}</div>
                        <div className="col-1">
                        <i onClick={
                              (e) => 
                              {
                              setToDos(toDos.filter((obj) => 
                                {
                                if (obj.id === eachTodo.id)
                                      {
                                        obj.status = "DELETED";
                                      }
                                return obj;
                                }
                                )
                              );
                            }}    className="fa-solid fa-trash "></i>
                        </div>
                      </div>
                    );
                  }return null
                } 
                )}
              </h5>
            </div>
          </div>

          <div className=" col-xl-4 col-12 card text-bg-success ms-3  mb-2  pb-5">
            <div className="card-header">Completed Tasks</div>
            <div className="card-body">
              <h5 className="card-title">
                {/* Tasks */}

                {     toDos.map((eachTodo) => 
                {
                    if (eachTodo.status === true) {
                      return (
                        <div className="row col-12">
                          <div className="col-8">{eachTodo.text}</div>
                          <div className="col-1">
                            <i onClick={
                              (e) => 
                              {
                              setToDos(toDos.filter((obj) => 
                                {
                                if (obj.id === eachTodo.id)
                                      {
                                        obj.status = "DELETED";
                                      }
                                return obj;
                                }
                                )
                              );
                            }}    className="fa-solid fa-trash "></i>
                          </div>
                        </div>
                      );
                    }
              return null})
                      } 
                
              </h5>
            </div>
          </div>

          <div className=" col-xl-3 col-12 card text-bg-danger ms-3  mb-2  pb-5">
            <div className="card-header">Deleted Tasks</div>
            <div className="card-body">
              <h5 className="card-title">
                {/* Tasks */}

                {toDos.map((eachTodo) => {
     if (eachTodo.status === "DELETED") {
       return (
         <div className="row col-12">
         <div className="col-8">{eachTodo.text}</div>
          <div className="col-1">
          <i onClick={
                              (e) => 
                              {
                              setToDos(toDos.filter((obj) => 
                                {
                                 return obj.id !== eachTodo.id
                                }
                                )
                              );
                            }}    className="fa-solid fa-trash "></i>
          </div>
        </div>
     );
    }
    return null})} 
                
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
