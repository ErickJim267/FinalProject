"""empty message

Revision ID: d41e8a6b3439
Revises: 
Create Date: 2021-04-27 06:48:05.156632

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd41e8a6b3439'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('name', sa.String(length=20), nullable=False),
    sa.Column('last_name', sa.String(length=20), nullable=False),
    sa.Column('id_address', sa.String(length=30), nullable=False),
    sa.Column('phone', sa.Integer(), nullable=False),
    sa.Column('birth_date', sa.Date(), nullable=False),
    sa.Column('user_rol', sa.Integer(), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('phone')
    )
    op.create_table('address',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('exact_address', sa.String(length=50), nullable=False),
    sa.Column('provincia', sa.String(length=15), nullable=False),
    sa.Column('canton', sa.String(length=15), nullable=False),
    sa.Column('distrito', sa.String(length=15), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('buddy',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('service', sa.String(length=30), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('other_skills', sa.String(length=100), nullable=True),
    sa.Column('size_accepted', sa.String(length=10), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('owner',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('comment',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('comment_body', sa.Text(), nullable=True),
    sa.Column('count_rating', sa.Integer(), nullable=True),
    sa.Column('id_buddy', sa.Integer(), nullable=True),
    sa.Column('id_owner', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['id_buddy'], ['buddy.id'], ),
    sa.ForeignKeyConstraint(['id_owner'], ['owner.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('pet',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('pet_name', sa.String(length=30), nullable=False),
    sa.Column('owner_id', sa.Integer(), nullable=False),
    sa.Column('specie', sa.String(length=10), nullable=True),
    sa.Column('size', sa.String(length=10), nullable=True),
    sa.Column('activity', sa.String(length=10), nullable=True),
    sa.Column('sex', sa.String(length=10), nullable=True),
    sa.Column('sterilized', sa.Boolean(), nullable=True),
    sa.Column('vaccinated', sa.Boolean(), nullable=True),
    sa.Column('dewormed', sa.Boolean(), nullable=True),
    sa.Column('personality', sa.String(length=150), nullable=True),
    sa.ForeignKeyConstraint(['owner_id'], ['owner.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('pet_name')
    )
    op.create_table('reservation',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('id_buddy', sa.Integer(), nullable=True),
    sa.Column('id_owner', sa.Integer(), nullable=True),
    sa.Column('reservation_date', sa.String(length=20), nullable=True),
    sa.Column('reservation_service', sa.String(length=10), nullable=True),
    sa.Column('reservation_state', sa.String(length=10), nullable=True),
    sa.ForeignKeyConstraint(['id_buddy'], ['buddy.id'], ),
    sa.ForeignKeyConstraint(['id_owner'], ['owner.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('reservation')
    op.drop_table('pet')
    op.drop_table('comment')
    op.drop_table('owner')
    op.drop_table('buddy')
    op.drop_table('address')
    op.drop_table('user')
    # ### end Alembic commands ###