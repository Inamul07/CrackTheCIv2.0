from pydantic import BaseModel
from typing import Optional


class Company(BaseModel):
    name: str
    branch: str
    logo: Optional[str] = ""
    verified: Optional[bool] = False

    class Config:
        schema_extra = {
            "example": {
                "name": "Google",
                "branch": "California",
                "logo": "shorturl.at/BKLMX",
                "verified": True,
            }
        }
