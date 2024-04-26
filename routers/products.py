from fastapi import APIRouter


producter_router=APIRouter(prefix='/products')


@producter_router.get('')
def TestEndpoint():
    return {"data":"products are here"}