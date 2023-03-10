<template>
	<v-app id="app" style="background: #eee;">
		<layout-toolbar />

		<layout-drawer />

		<layout-view />

		<layout-loading />

		<layout-show />

		<v-snackbar :timeout="success.timeout" top right dark
			:color="success.color" v-model="success.show"
		>
			<v-icon color="white" >
			{{ success.icon }}
			</v-icon>
			<span class="ml-3" style="font-size:1.2rem; vertical-align: middle;">
				{{ success.msg  }}
			</span>
		</v-snackbar>

		<v-dialog v-model="confirm.active" :max-width="confirm.maxWidth" :persistent="!confirmNoAction">
			<core-confirmation :type="confirm.type"
			:title="confirm.title" :text="confirm.text"
			:ok_text="confirm.ok_text"  :cancel_text="confirm.cancel_text"
			:on_cancel="confirm.on_cancel"  :on_ok="confirm.on_ok"
			@ok="hideConfirm" @cancel="hideConfirm"
			/>
		</v-dialog>
		
	</v-app>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import { DIALOG_MAX_WIDTH } from '@/config';
import { SET_WINDOW_WIDTH, SET_RESPONSIVE } from '@/store/mutations.type';


export default {
	name: 'App',
	data() {
		return {
			success: {
				color: 'success',
				icon: 'mdi-check-circle',
				show: false,
				timeout: 1500,
				msg: '存檔成功'
			},

			confirm: {
            type: false,
            title: '',
            text: '',
            active: false,
            action: '',
            maxWidth: DIALOG_MAX_WIDTH,
            ok_text: '確定',
            cancel_text: '取消',
            on_ok: null,
            on_cancel: null
			}
		}
	},
	computed: {
		...mapGetters(['responsive','contentMaxWidth']),
		confirmNoAction() {
			return !this.confirm.on_ok && !this.confirm.on_cancel
		}
	},
	created() {
		Bus.$on('errors', this.onError);
		Bus.$on('success', this.onSuccess);
		Bus.$on('warning', this.onWarning);
		Bus.$on('show-confirm', this.showConfirm);
	},
	mounted() {
		if(window.innerWidth) this.$store.commit(SET_WINDOW_WIDTH, window.innerWidth);
		this.onResponsiveInverted();
		
		window.addEventListener('resize', this.onResponsiveInverted);
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.onResponsiveInverted);
	},
	methods: {
		onError(error) {
			this.showConfirm(confirm);
		},
		onSuccess(msg) {
			this.success.icon = 'mdi-check-circle';
			this.success.color = 'success';
			this.success.msg = msg ? msg : '存檔成功';
			this.success.show = true;
		},
		onWarning(msg){
			if(msg) {
				this.success.icon = 'mdi-alert-circle';
				this.success.color = 'warning';
				this.success.msg = msg;
				this.success.show = true;
			}
		},
		showConfirm({type, title, text, ok ='確定', cancel = '取消', onOk = null, onCancel = null, maxWidth = 0 }) {
			this.confirm = {
            type,
            title,
				text,
				maxWidth: maxWidth ? maxWidth : DIALOG_MAX_WIDTH,
            ok_text: ok,
            cancel_text: cancel,
            active: true,
            on_ok: onOk,
            on_cancel: onCancel
			};
      },
      hideConfirm() {
         this.confirm = {
            type: '',
            title: '',
            text: '',
            ok_text: '確定',
            cancel_text: '取消',
            maxWidth: DIALOG_MAX_WIDTH,
            active: false,
            on_ok: null,
            on_cancel: null
         };
      },
		onResponsiveInverted () {
			if(window.innerWidth) this.$store.commit(SET_WINDOW_WIDTH, window.innerWidth);
			
         if(window.innerWidth < 991) {
            this.$store.commit(SET_RESPONSIVE, true);
         }else {
            this.$store.commit(SET_RESPONSIVE, false);
			}
		}
		
	}
};
</script>

<style lang="scss">
* :not(.v-icon) {
  font-family: "微軟正黑體",sans-serif!important;
}
html {
  scroll-behavior: smooth;
}

.cn {
	font-family: "微軟正黑體"
}

.trun {
   overflow: hidden!important;
   text-overflow: ellipsis!important;
   line-height: 1.1!important;
}

.a-btn {
   text-decoration: none;
}

.titleText {
	font-weight: 700;
	font-size:1.2rem
}

.errText {
	color: #fff;
}
.successText {
	font-size: 1.2rem;
	color: #fff;
}
.text-success {
	font-size: 16px;
	color: #4caf50!important;
}

.img-center {
	display: block;
	margin: auto;
}

.center-helper {
	display: inline-block;
	height: 100%;
	vertical-align: middle;
}

.custom-table {
	border-collapse: collapse;
   width: 100%;
}
.custom-table td, .custom-table th {
  border: 1px solid #ddd;
  padding: 8px;
}
.custom-table tr:nth-child(even){background-color: #f2f2f2;}

.custom-table tr:hover {background-color: #ddd;}

.custom-table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
}

.up-line {
	text-decoration: overline;
}
</style>
