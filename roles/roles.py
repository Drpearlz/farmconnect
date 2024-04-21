from typing import Any
from utils.authentication import get_current_user
from fastapi import Depends


class RoleValidator():
    def __init__(self,role_list) -> None:
        self.role_list=role_list

    def __call__(self,user=Depends(get_current_user) ) -> bool:
        return user.role in self.role_list