<template>
    <div class="action">
        <div class="mall">
            商城<br>动态
        </div>
        <div class="vertical">
            <mt-picker :itemHeight="70" :slots="slots"></mt-picker>
        </div>
    </div>
</template>

<script>
import { Picker } from 'mint-ui';
export default {
    name: 'action',
    Picker,
    data () {
        return {
            slots: [
                {
                    flex: 1,
                    defaultIndex: 0,
                    values: ['暑期放价嗨不停！，暑期放价嗨不停！暑期放价嗨不停！暑期放价嗨不停！',
                            'lijunhapshuai！，lijunhapshuai！lijunhapshuai！lijunhapshuai！',
                            '李俊真的好帅啊！，李俊真的好帅啊！李俊真的好帅啊！李俊真的好帅啊！',
                            '这真的是真的嘛！，这真的是真的嘛！这真的是真的嘛！这真的是真的嘛！'],
                    className: 'slot1',
                    textAlign: 'left'
                }
            ],
            obj: {
                a: 1,
                b: 3
            }
        }
    },
    mounted () {
        setInterval(() => {
            this.slots[0].defaultIndex = (this.slots[0].defaultIndex + 1) % this.slots[0].values.length;
        }, 1500);
    }
}
</script>

<style scoped lang='scss'>
.action {
    display: flex;
    padding: 0 0.3rem 0.1rem;
    margin-bottom: 0.1rem;
    background: #fff;
    margin-top: 0.2rem;
    .mall {
        margin-right: 0.2rem;
        color: #ff6d00;
        font-size: 0.36rem;
        line-height: 0.4rem;
    }
    .vertical {
        position: relative;
        flex: 1;
        height: 0.8rem;
        border: 0.02rem solid #ccc;
        border-radius: 0.05rem;
        overflow: hidden;
        .picker {
            position: absolute;
            width: 100%;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
        }
    }
}
</style>
