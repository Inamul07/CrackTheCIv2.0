from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.companyRoute import router as CompanyRouter

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def hello_world():
    return {"Message": "Hello World!!"}


app.include_router(router=CompanyRouter)
