from fastapi import APIRouter
from database import db
from models.companyModel import Company

router = APIRouter(prefix="/company", tags=["Company"])


@router.post("/create-company")
async def create_company(data: Company):
    result = await db.create(data)
    return {"Inserted": result}


@router.get("/all-companies")
async def get_all_companies():
    return await db.get_all_companies()


@router.get("/get-unverified-companies")
async def get_unverified_companies():
    data = await db.get_unverified_companies()
    return data
