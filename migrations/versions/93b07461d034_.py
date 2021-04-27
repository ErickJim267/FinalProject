"""empty message

Revision ID: 93b07461d034
Revises: 61f22f7f4676
Create Date: 2021-04-26 22:21:23.257242

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '93b07461d034'
down_revision = '61f22f7f4676'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('user', 'about_me_long',
               existing_type=sa.TEXT(),
               nullable=False)
    op.alter_column('user', 'about_me_short',
               existing_type=sa.VARCHAR(length=80),
               nullable=False)
    op.alter_column('user', 'password',
               existing_type=sa.VARCHAR(length=30),
               nullable=False)
    op.alter_column('user', 'phone',
               existing_type=sa.INTEGER(),
               nullable=True)
    op.drop_constraint('user_name_key', 'user', type_='unique')
    op.drop_constraint('user_phone_key', 'user', type_='unique')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_unique_constraint('user_phone_key', 'user', ['phone'])
    op.create_unique_constraint('user_name_key', 'user', ['name'])
    op.alter_column('user', 'phone',
               existing_type=sa.INTEGER(),
               nullable=False)
    op.alter_column('user', 'password',
               existing_type=sa.VARCHAR(length=30),
               nullable=True)
    op.alter_column('user', 'about_me_short',
               existing_type=sa.VARCHAR(length=80),
               nullable=True)
    op.alter_column('user', 'about_me_long',
               existing_type=sa.TEXT(),
               nullable=True)
    # ### end Alembic commands ###