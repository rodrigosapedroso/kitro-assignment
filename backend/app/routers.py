from fastapi import APIRouter, Depends
from app.schemas import ProductOut
from app.models import Product
from sqlalchemy.orm import Session
from app.database import get_db

router = APIRouter()

@router.get("/products", response_model=list[ProductOut])
def get_products(db: Session = Depends(get_db)): 
    products = db.query(Product).all()
    return products